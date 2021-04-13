import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0ecbe58641698bac7d66c0ee625f6455"; 

export const weatherApi = async(query) =>{
   const {data} = await axios.get(URL, {
    params: {
        q :query,
        units : "metric",
        APPID : API_KEY,
    }

   });
   return data;
}