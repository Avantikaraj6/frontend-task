import {useState} from 'react'
import streeticon from "./street-view-solid.svg";
import clouds from "./images/clouds.png"

const WeatherData = ({location,weat,search,setSearch}) => {
const [imaf,setImaf] = useState([])


  return (
    <>

    <div className="weather-text">
      <div className="input-box">
        <input type="search" value={search} className="inputfield" onChange={(event) => {setSearch(event.target.value)}} />
        {!location ? (
          <p className="data">No Data Found </p>) :(
        <div>
        <div className="info">
          <h2 className="location">
            <img src={streeticon} className="icon" /> {search.toUpperCase()}
          </h2>
          <h1 className="temp">{Math.ceil(location.temp - 273.15)}&deg;C</h1>
          <h3 className="max">Min: {Math.ceil(location.temp_min - 273.15)}&deg;C | Max :{Math.ceil(location.temp_max - 273.15)}&deg;C</h3>
          <img src={`https://openweathermap.org/img/wn/${weat[0].icon}@2x.png`} /> 
          <h3 className="weather-tex">{weat[0].main}</h3>
        </div>

        <div className="wave-one"><h6>Humidity: {location.humidity}</h6>
        <h6>Pressure: {location.pressure}</h6></div>
        </div>
        )}
      </div>
    </div>
    </>
  )
}

export default WeatherData