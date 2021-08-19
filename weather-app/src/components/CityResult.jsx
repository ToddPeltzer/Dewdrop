

import React, { useState, useEffect } from 'react';


function CityResult({ match }) {

    const [cities, setCities] = useState([])

    const key = process.env.REACT_APP_WEATHER_KEY

    useEffect (() => {
            const url  = `//api.openweathermap.org/data/2.5/weather?q=${match.params.id}&appid=${key}`
            fetch(url)
            .then((res) => {
               return res.json()
            })
            .then((res) => {
                setCities(res)
            })
            .catch(console.error)
    }, [])

    //convert Kelvin to Fahrenheit and floor it
    let temp = Math.floor(( cities.main.temp - 273.15 ) * 9/5 + 32)

    //floor wind speed
    let wind = Math.floor(cities.wind.speed)
    return (
            <section>
                City: {cities.name}
                <br/>
                Temp: {temp}ºF
                <br/>
                Wind: {wind}mph
                <br/>
                Humidity: {cities.main.humidity}%
               
            </section>
    );
}

export default CityResult;