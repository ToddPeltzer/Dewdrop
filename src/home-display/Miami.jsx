import React, { useState, useEffect } from 'react';
import windy from '../images/new-windy.png'
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import foggy from '../images/foggy.png'
import rainy from '../images/rainy.png'
import stormy from '../images/thunder.png'
import snowy from '../images/new-snow.png'
import loading from '../images/loading.gif'


const key = process.env.REACT_APP_WEATHER_KEY

function Miami(props) {

    const [city, setCity] = useState([])

    //API call for specific location on home page
    useEffect (() => {
        const url  = `//api.openweathermap.org/data/2.5/weather?q=miami&appid=${key}`
        fetch(url)
        .then((res) => {
           return res.json()
        })
        .then((res) => {
            setCity(res)
        })
        .catch(console.error)
    }, [])

    //setting variable values for below function regarding icons
    let icon = ""
    let wind = ""
    let altText = ""

    //function to change icon based on weather conditions
    function weatherIcon () {
        if (wind > "10") {
            icon = windy
            altText = "Windy Image"
        } else if (city.weather[0].main === "Clouds") {
            icon = cloudy
            altText = "Cloudy Image"
        } else if (city.weather[0].main === "Overcast") {
            icon = cloudy
            altText = "Cloudy Image"
        } else if (city.weather[0].main === "Clear"){
            icon = sunny
            altText = "Clear Image"
        } else if (city.weather[0].main === "Smoke") {
            icon = foggy
            altText = "Foggy Image"
        } else if (city.weather[0].main === "Haze") {
            icon = foggy
            altText = "Foggy Image"
        } else if (city.weather[0].main === "Rain") {
            icon = rainy
            altText = "Rainy Image"
        } else if (city.weather[0].main === "Mist") {
            icon = rainy
            altText = "Mist Image"
        } else if(city.weather[0].main === "Thunderstorm") {
            icon = stormy
            altText = "Storm Image"
        } else if(city.weather[0].main === "Lightning") {
            icon = stormy
            altText = "Storm Image"
        } else if(city.weather[0].main === "Snow") {
            icon = snowy
            altText = "Snow Image"
        } else if(city.weather[0].main === "Blizzard") {
            icon = snowy
            altText = "Snow Image"
        } else if(city.weather[0].main === "Slurry") {
            icon = snowy
            altText = "Snow Image"
        } else {
            icon=""
            altText=""
        }

    }

    //guard in case API is slightly behind
    if (!city.wind && !city.main) { 
        return  <div className="loading">
                    <img className="loadingImg" src={loading} alt="Loading Icon"></img>
                    <span className="loadingText">Loading...</span>
                </div>
    } else {
        // convert Kelvin to Fahrenheit and floor it
        const temp = Math.floor(( city.main.temp - 273.15 ) * 9/5 + 32)
        const tempMin = Math.floor(( city.main.temp_min - 273.15 ) * 9/5 + 32)
        const tempMax = Math.floor(( city.main.temp_max - 273.15 ) * 9/5 + 32)

        const wind = Math.floor(city.wind.speed)        // floor wind speed

        weatherIcon()       //call icon change function based on results weather

    return (
        <div>
            <img className="weatherIcon" src={icon} alt={altText}></img>
                <br/>
            City: {city.name}
                <br/>
            Temp: {temp}ºF
                <br/>
            Temp Min: {tempMin}ºF
                <br/>
            Temp Max: {tempMax}ºF
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

export default Miami;