const axios = require("axios");
const cheerio = require("cheerio");




async function allNewsScraper(type) { 
  const url = "https://www.rt.com/"+type;
  
  return await axios(url).then((response) => {
    const html_data = response.data;
    const $ = cheerio.load(html_data);
     
    
    const NewsData = [];

    $('.js-listing__list li').each((Index, el) => {

      const news = {};

      $(el).find('a').each((Index, el) =>{
        switch(Index) {
          case 0:
            news.img = $(el).find('img').attr('data-src');
            break;
          case 1:
            news.title = $(el).text().replace('/\s+/g', ' ').trim(); 
            news.link = $(el).attr('href')
            break;
          case 2:
            news.description = $(el).text().replace('/\s+/g', ' ').trim(); 
            
        }
      });
      news.date = $(el).find('span').text();
      
      NewsData.push(news);
    });

    
    return NewsData;
  });
  
}

async function newsScraper(type,slug) { 
  const url = "https://www.rt.com/"+type+"/"+slug;

  
  
  const news = {};
  return await axios(url).then((response) => {
    const html_data = response.data;
    const $ = cheerio.load(html_data);
     
    $('.layout__content ').find('p').each((Index, el) => {
      news.text += $(el).text();

      news.text += '\n';
    });
    news.title = $('.layout__content ').find('h1').text().replace('/\s+/g', ' ').trim();
    news.img = $('.layout__content ').find('img').attr('data-src');

    
    return news;
  });
  
}





const AllNews = async (req,res,next)=>{ 
  try {
    const News = await allNewsScraper(req.params.type);
    return res.status(200).json(News);
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
}

const News = async (req,res,next)=>{  
  try {
    const News = await newsScraper(req.params.type,req.params.slug);
    return res.status(200).json(News);
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
}

module.exports = {
  AllNews,
  News
}