const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://Mohammedkh21:TTD57vz6NsRa0bnr@cluster0.c4gaghl.mongodb.net/ScrapProject?retryWrites=true&w=majority";

const mongodb = (collection, fun) => {

  MongoClient.connect(uri)
    .then( async (client) => {

      const db = client.db("ScrapProject").collection(collection);
      await fun(db);
      client.close();

    })
    .catch();
};



module.exports = mongodb;
