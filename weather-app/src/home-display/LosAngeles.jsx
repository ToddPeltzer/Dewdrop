import React, { useState, useEffect } from 'react';


const key = process.env.REACT_APP_WEATHER_KEY

function LosAngeles(props) {

    const [city, setCity] = useState([])

    useEffect (() => {
        const url  = `//api.openweathermap.org/data/2.5/weather?q=los%20angeles&appid=${key}`
        fetch(url)
        .then((res) => {
           return res.json()
        })
        .then((res) => {
            setCity(res)
        })
        .catch(console.error)
    }, [])

    if (!city.wind && !city.main) { return <span className="loading">loading please wait...</span>} else {
        // convert Kelvin to Fahrenheit and floor it
        const temp = Math.floor(( city.main.temp - 273.15 ) * 9/5 + 32)
        
        // floor wind speed
        const wind = Math.floor(city.wind.speed)
        console.log(city.main)
    return (
        <div>
            City: {city.name}
                <br/>
            Temp: {temp}ºF
                <br/>
            Condition: {city.weather[0].main}
                <br/>
            Wind: {wind}mph
                <br/>
            Humidity: {city.main.humidity}%
        </div>
    );
}
}

export default LosAngeles;