import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import "../src/SearchBox.css"
export default function SearchBox({handler}){
    let [city,setcity] = useState("");
    let [error,setError]=useState(false);
    let API_URl = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="968f248cfd69289e7234b01b67299072";
    let getWeatherInfo=async ()=>{
        //let result = await fetch(`${API_URl}?q=${city}&appid=${API_KEY}`);
        try{
            let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResult = await result.json();
        console.log(jsonResult);
        let finalResult={
            cityName:city,
            temp:jsonResult.main.temp,
            tempMin:jsonResult.main.temp_min,
            tempMax:jsonResult.main.temp_max,
            humidity:jsonResult.main.humidity,
            feelsLike:jsonResult.main.feels_like,
            weather:jsonResult.weather[0].description
        }
        console.log(finalResult);
        return finalResult;
        }catch(err){
            throw err;
        }
        
    }
    
    let handleChange=(event)=>{
        setcity(event.target.value)
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setcity("");
        let result =await getWeatherInfo();
        handler(result);
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className="searchBox">
            <h3>Search For the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField
                required
                id="city"
                label="Enter city"
                value={city}
                onChange={handleChange}
            /><br></br><br></br>
            <Button variant="contained" type='submit'>
                Search
            </Button>
            {error&&<h3 style={{color:"red",}}>No such place exist</h3>}
            </form>
        </div>
    )
}