import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity ,getWeatherDataForlocation } from "../api";

const WeatherContext = createContext(null);
// yeh ange ka kam sort kr dia
export const useWeather = () => {    
    return useContext(WeatherContext);
};

// idhr se hum provider use state use krne ke liye 
export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState("");
    // we are fetching data 

    const fetchData = async () => {
        if (!searchCity) return;

        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    };
    const fetchCurrentUserLocationData= () =>{
        navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForlocation(
            position.coords.latitude,
            position.coords.longitude
        ).then((data)=>setData(data));
    })
    }

    return (
        <WeatherContext.Provider
            value={{ searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocationData }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};