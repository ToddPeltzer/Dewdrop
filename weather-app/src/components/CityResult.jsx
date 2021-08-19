

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
                console.log(cities.main.temp)
            })
            .catch(console.error)
    }, [])

    if (!cities.wind && !cities.main) { return <h2>loading pleaase wait</h2>} else {
    // convert Kelvin to Fahrenheit and floor it
    const temp = Math.floor(( cities.main.temp - 273.15 ) * 9/5 + 32)
    
    // floor wind speed
    const wind = Math.floor(cities.wind.speed)
    return (
            <section>
                City: {cities.name}
                <br/>
                {/* {cities.wind.speed}
                <br/>
                {cities.main.temp} */}
                Temp: {temp}ºF
                <br/>
                Wind: {wind}mph
                <br/>
                Humidity: {cities.main.humidity}%
               
            </section>
    );}
}

export default CityResult;