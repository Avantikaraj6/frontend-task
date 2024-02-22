import React from 'react'

const Box = ({value,weather,temp,logo,desc}) => {
    
  return (
    <div className="box">
        <h6 className="dt-text">{value}</h6>
        <img src={`https://openweathermap.org/img/wn/${logo}@2x.png`} className="icon"/>
        <h3>{weather}</h3>
        <p className="desc">{desc}</p>
        <h6  className="humid">Temp : {temp.feels_like}</h6>
        <h6 className="humid">Humidity: {temp.humidity}</h6>
    </div>
  )
}

export default Box