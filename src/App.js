import logo from './logo.svg';
import './App.css';
import sunny from "./images/clear.png";
import cloudy from "./images/clouds.png";
import rainy from "./images/rain.png";
import snowy from "./images/snow.png";
import smoke from "./images/mist.png";
import defaultimg from "./images/drizzle.png";
import humidity from "./images/humidity.png";
import wind from "./images/wind.png";
import { useState } from 'react';
function App() {
 
  let [City, setCity]= useState('')
  let [Alldata,setData] =  useState(null);
  let [error, setError]= useState(false);
  let [networkError, setNetworkError] = useState(false);
  let [errortwo,seterrortwo] = useState(false);
  // console.log(City)
  let getWeatherIcon = (weather)=>{
      switch(weather){
        case 'Clear': return sunny;
        case 'Clouds': return cloudy;
        case 'Rain': return rainy;
        case 'Snow': return snowy;
        case 'Smoke': return smoke;
        default: return defaultimg;
      }
    }
  
  let getData=(event)=>{
    event.preventDefault();
    setNetworkError(false);
    setError(false)
    seterrortwo(false)
    if(City.trim() ===""){
      seterrortwo(true);
      setData(null);
      return;
    }
    fetch(`https://weatherapp-backend-production-c5a6.up.railway.app/weather?city=${City}`)
   .then((response)=>{
    if(!response.ok)
    {
       throw new Error("City Not Found")
    }
      return response.json();
   })  
   .then((data)=>{
    if(data.cod==404){
      setData(null)
      setError(true)
    }
    else{
      setData(data)
      setError(false)
    }
    console.log(data)
   })
     .catch((err) => {
        if (err.message === "City Not Found") {
          setData(null);
          setError(true);
        } else {
          setNetworkError(true); // Handle internet issues
        }})
   setCity('');
  }
   return(
    <div className="App">
        <div className="weather-app mt-10 p-10  w-[70%]">
      <form className="pt-10" onSubmit={getData}>
        <input className="input w-md" placeholder="City Name" value={City} onChange={(e)=>setCity(e.target.value)}></input>
        <button className="button outline-2 text-1xl">Submit</button>
      </form>

      {networkError && <p className="text-white-500 text-xl font-bold mt-4">⚠️ Network Error! Please check your internet connection.</p>}
      {Alldata &&
      <>
      <div className="app-body ">
      <div className="flex justify-center">
      <img  className="" src={getWeatherIcon(Alldata.weather[0]?.main)} alt='Weather-Icon'/>
      </div>
    <div className="pt-10">
    <h1 className="text-3xl font-bold">{Alldata.name}</h1>
    <p className="text-3xl font-bold pt-3">{Alldata.main.temp}°C</p>
    </div>
  </div>
  <div className='flex justify-around'>
    <div className='flex'>
      <img src={humidity} className='w-20 h-16'/>
      <div className='ml-3'>
      <p className='text-2xl'>{Alldata.main.humidity}%</p>
      <h1 className='text-xl'>Humidity</h1>
       </div>
    </div>
    <div className='flex'>
      <img src={wind} className='w-20 h-16'/>
      <div className='ml-3'>
        <p className='text-2xl'>{(Alldata.wind.speed *3.6).toFixed(1)}km/h</p>
      <h1 className='text-xl'>Wind Speed</h1>
      </div>
    </div>
  </div>
  </>
}
      {error &&
      <p className="text-white-500 text-xl font-bold mt-4">Please Enter Valid City</p>
     
      }
      {errortwo &&
      <p className="text-white-500 text-xl font-bold mt-4">Please Enter City Name</p>
     
      }

    </div>  
    </div>
   )
  }
export default App;
// {Alldata?(data):error?(nodata):null}