import React from 'react'
import { useState, useEffect } from "react";
import WeatherData from './WeatherData';
import Forcast from './Forcast';

const Body = () => {
    const [location, setLocation] = useState(null);
    const [search, setSearch] = useState("Pune");
    const [weat , setWeat] = useState([])
  const [ forcastLoc, setForcastLoc] = useState([])


    const fetchApi = async () =>{
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=aadf1304548dfaedf2739e822e461421`
      const response = await fetch(url);
      const resJson = await response.json();
      setLocation(resJson.main);
      setWeat(resJson.weather);
      console.log(setWeat)
    };

  const forcastApi = async () => {
    const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=fed1065bd13fe9cacc80c0d8fbc8b9dd`);
    const resJson = await response.json();
    setForcastLoc(resJson.list)
  }
    useEffect (() =>{
        fetchApi();
        forcastApi();
      },[])
  return (
    <>
    <h1 className="time-text weather-app">Realtime Weather App</h1>
    <div className="body">
        

        <WeatherData weat={weat} location={location} search={search} setSearch={setSearch}/>
        <Forcast forcastweat={forcastLoc}/>
    </div>
    </>
  )
}

export default Body