import React, { useState, useEffect } from 'react';

function StateResult({ match }) {

    const [states, setStates] = useState()

        const key = process.env.REACT_APP_WEATHER_KEY

        useEffect (() => {
            const url = `//api.openweathermap.org/data/2.5/weather?q=${match.params.id}&appid=${key}`
            fetch(url)
            .then((res) => {
               return res.json()
            })
            .then((res) => {
                setStates(res)
            })
            .catch(console.error)
        }, [])

    //convert Kelvin to Fahrenheit and floor it
    // const temp = Math.floor(( cities.main.temp - 273.15 ) * 9/5 + 32)

    //floor wind speed
    // const wind = Math.floor(cities.wind.speed)
    return (
        <section>
            City: {states.name}
            <br/>
            {/* Temp: {temp}ºF
            <br/>
            Wind: {wind}mph
            <br/>
            Humidity: {cities.main.humidity}% */}
            </section>
    );
}

export default StateResult;