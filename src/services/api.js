import axios from 'axios';

// get API through openweathermap.org---
const API_KEY = '316f74c3973d657c6495006a15b68373'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (City, Country) => { //city and country ko lekar mujhe API call marni h
    try {
        let response = await axios.get(`${API_URL}`, { //get API ka hmara result aayega yha
            params: {
                q: `${City},${Country}`,
                appid: API_KEY,
                units: 'metric'
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error while calling the API:', error.message); // mera API kab fail ho jaye nhi pata isliye try catch (error handling is important)
        return error.response;
    }
};
