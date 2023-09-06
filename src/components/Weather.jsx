import Search_icon from "../components/Assets/search.png"
import Clear_icon from "../components/Assets/clear.png"
import Rain_icon from "../components/Assets/rain.png"
import Cloud_icon from "../components/Assets/cloud.png"
import Drizzle_icon from "../components/Assets/drizzle.png"
import Snow_icon from "../components/Assets/snow.png"
import wind_icon from "../components/Assets/wind.png"
import Humidity_icon from "../components/Assets/humidity.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../components/Weather.css"
import { useState } from "react";
export const Weather = () => {
  const[input , setInput]=useState();
  const [icon , setIcon] = useState(Cloud_icon)

  let api_key = "d2b01008ec290a9786180f7ef5829ca7";

  const Search = async (e)=>{
    e.preventDefault()
    let element = input;
    console.log(element);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    const temperature = document.getElementById("temperature");
    temperature.innerHTML = data.main.temp + "°c";
    const location = document.getElementById("location");
    location.innerHTML = data.name;

    // eslint-disable-next-line default-case
    // switch (data.weather.icon){
    //   case "01d":
    //     setIcon(Clear_icon)
    //     break;
    //   // eslint-disable-next-line no-duplicate-case
    //   case "01n":
    //     setIcon(Clear_icon)
    //     break;
    //   case "02d":
    //     setIcon(Cloud_icon)
    //     break;
    //   case "02n":
    //     setIcon(Cloud_icon)
    //     break;
    //   case "03d":
    //     setIcon(Drizzle_icon)
    //     break;
    //   case "03n":
    //     setIcon(Drizzle_icon)
    //     break;
    //   case "04d":
    //     setIcon(Drizzle_icon)
    //     break;
    //   case "04n":
    //     setIcon(Drizzle_icon)
    //     break;
    //   case "09d":
    //     setIcon(Rain_icon)
    //     break;
    //   case "09n":
    //     setIcon(Rain_icon)
    //     break;
    //   case "10d":
    //     setIcon(Rain_icon)
    //     break;
    //   case "10n":
    //     setIcon(Rain_icon)
    //     break;
    //   case "13d":
    //     setIcon(Snow_icon)
    //     break;
    //   case "13n":
    //     setIcon(Snow_icon)
    //     break;
    // }

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setIcon(Clear_icon)
    }
    else if (data.weather[0].icon==="02d"|| data.weather[0].icon==="02n"){
      setIcon(Cloud_icon)
    }
    else if (data.weather[0].icon==="03d"|| data.weather[0].icon==="03n"|| data.weather[0].icon==="04n"|| data.weather[0].icon==="04d"){
      setIcon(Drizzle_icon)
    }
    else if (data.weather[0].icon==="09d"|| data.weather[0].icon==="09n" || data.weather[0].icon==="10d"|| data.weather[0].icon==="10n"){
      setIcon(Rain_icon)
    }
    else if (data.weather[0].icon==="13d"|| data.weather[0].icon==="13n"){
      setIcon(Snow_icon)
    }
    else{
      setIcon(Clear_icon)
    }
  }


  return (
    <div>
   <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Weather Dectector</h5>
          <form onSubmit={Search} className="input-group">
            <input
              type="text"
              className="form-control"
              id="location_data"
              placeholder="Search..."
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
              <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
          <div className="mt-3">
            <img src={icon} alt="" />
            <div className="temperature" id="temperature"></div>
            <div className="location">
            <FontAwesomeIcon icon={faMapMarker} size="2x" /> <h4 id="location">Tirunelveli</h4>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
