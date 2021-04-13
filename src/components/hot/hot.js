import {useState} from "react";
import { weatherApi} from "../weatherApi/weatherApi";

    function Hott() {
        
    
        
        const [weather, setWeather] = useState({});
        const [query, setQuery] = useState("");
        const search = async(e) => {
            if(e.key == "Enter"){
              const data = await weatherApi(query)
                   setWeather(data);
                   setQuery("");
                  }
                  var i ={uno: function hot() {
                    if(weather.main.temp > 28){
                  var hott = "Damn, you should keep yourself inside with the air-conditioning";
                  return hott;
                }}
            }
        
    return(
        <div>{i.uno()}</div>
    )
}}
export default Hott;