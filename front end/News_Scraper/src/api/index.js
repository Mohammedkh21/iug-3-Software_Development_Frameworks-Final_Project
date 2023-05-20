import axios from "axios";
import session from "../session"

const hostName = "http://localhost:5050";

const login = (data)=>{
  return axios({
    method: "post",
    url: hostName+"/auth/login",
    data: {
      email: data.email.value,
      password: data.password.value,
    },
    headers: { 
      "Content-Type": "application/json",
    },
  })
}

const signup = (data)=>{
  return axios({
    method: "post",
    url: hostName+"/auth/signup",
    data: {
      name: data.name.value,
      email: data.email.value,
      password: data.password.value,
    },
    headers: { 
      "Content-Type": "application/json",
    },
  })
}

const getAllNews = (type)=>{
  return axios({
    method: "get",
    url: hostName+"/allNews/"+type,
    headers: { 
      "Authorization" : session.getItem('token')
    },
  })
}

const getNews = (type,slug)=>{
  return axios({
    method: "get",
    url: hostName+"/News/" + type + "/" + slug ,
    headers: { 
      "Authorization" : session.getItem('token')
    },
  })
}




export default {
  login,signup,getAllNews,getNews
}