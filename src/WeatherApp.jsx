import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css"
import { useState } from "react"
export default function WeatherApp(){
    let [info,setInfo]=useState(
        {
            cityName:"warangal",
            temp:25,
            tempMin:24.5,
            tempMax:25.6,
            humidity:40,
            feelsLike:26,
            weather:"scattered clouds"
    }
    )
    let handler = (result)=>{
        setInfo(result);
    }
    return (
        <div>
            <h1>Weather App</h1>
        <SearchBox handler={handler}></SearchBox>
        <InfoBox info={info}></InfoBox>
        </div>
        
        
    )
}