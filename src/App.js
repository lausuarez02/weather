import logo from './logo.svg';
import './App.css';
import { weatherApi} from "./components/weatherApi/weatherApi";
import { useState } from 'react';
import Hott from "./components/hot/hot";
import pic from "./components/pic/nasa-Q1p7bh3SHj8-unsplash.jpg";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async(e) => {
    if(e.key == "Enter"){
      const data = await weatherApi(query)
           setWeather(data);
           setQuery("");
          }
  
    
  }
  return (
    <div className="main-container" style={{ 
      backgroundImage: `url(${pic})` 
    }}>
     
    <input type= "text" className="search" placeholder="...search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
    {weather.main && (
      <main className="card">
      <div className="city">
       <h2 className="city-name">
         <span>{weather.name}</span>
         <sup>{weather.sys.country}</sup>
       </h2>
       <div className="city-lamp">
         {Math.round(weather.main.temp)}
         <sup>&deg;C</sup>
     

       </div>
       <div className="city-img">
          <img src={"http://openweathermap.org/img/wn/10d@2x.png"}/>
       </div>
       
       </div>
       </main> 
    )}
   
    </div>
  );
}

export default App;
