const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=yes`
    );
    return await response.json();
};

export const getWeatherDataForlocation = async (lat, lon) => {
    const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${lat},${lon}&aqi=yes`
    );
    return await response.json();
};