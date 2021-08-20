import React, { useState, useEffect } from 'react';


const key = process.env.REACT_APP_WEATHER_KEY

function Seattle(props) {

    const [city, setCity] = useState([])

    useEffect (() => {
        const url  = `//api.openweathermap.org/data/2.5/weather?q=seattle&appid=${key}`
        fetch(url)
        .then((res) => {
           return res.json()
        })
        .then((res) => {
            setCity(res)
        })
        .catch(console.error)
    }, [])

    if (!city.wind && !city.main) { return <h2>loading pleaase wait</h2>} else {
        // convert Kelvin to Fahrenheit and floor it
        const temp = Math.floor(( city.main.temp - 273.15 ) * 9/5 + 32)
        
        // floor wind speed
        const wind = Math.floor(city.wind.speed)
    return (
        <div>
            City: {city.name}
                <br/>
            Temp: {temp}ºF
                <br/>
            Wind: {wind}mph
                <br/>
            Humidity: {city.main.humidity}%
        </div>
    );
}
}

export default Seattle;