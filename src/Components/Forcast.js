import React from 'react'
import Box from './Box'
const Forcast = ({forcastweat}) => {
    
    var fiveFilm = forcastweat.slice(0,5)
    console.log(fiveFilm)
  return (
    <div className="forcast" >
      {fiveFilm.map((value,i) => {
        return(
            <div>
                <Box value={value.dt_txt} weather={value.weather[0].main} temp={value.main} logo={value.weather[0].icon} desc={value.weather[0].description}/>
                </div>
        )
      })}
    </div>
  )
}

export default Forcast