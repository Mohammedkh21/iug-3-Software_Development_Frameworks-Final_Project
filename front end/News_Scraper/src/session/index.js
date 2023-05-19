const getItem = (key)=>{
  const value =  window.sessionStorage.getItem(key);
  return value ? value : null;
}

const setItem = (key,value)=>{
  window.sessionStorage.setItem(key, value);
  return value;
}

const removeItem = (key)=>{
  window.sessionStorage.removeItem(key);
  return true;
}




export default {
  getItem,setItem,removeItem
}