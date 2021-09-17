import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import windy from '../images/new-windy.png'
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import foggy from '../images/foggy.png'
import rainy from '../images/rainy.png'
import stormy from '../images/thunder.png'
import snowy from '../images/new-snow.png'
import loading from '../images/loading.gif'
import '../App.css'


function CityResult({ match }) {


    const key = process.env.REACT_APP_WEATHER_KEY

    const [city, setCity] = useState([])
        //getting API information for the city user selected from the city list
        useEffect (() => {
            const url  = `//api.openweathermap.org/data/2.5/weather?q=${match.params.id}&appid=${key}`
            fetch(url)
            .then((res) => {
               return res.json()
            })
            .then((res) => {
                setCity(res)
            })
            .catch(console.error)
        }, [])

    //setting variables for below rules on icons
    let icon = ""
    let wind = ""
    let altText = ""
    let history = useHistory()      //function for back button to revert to previous page

    //setting rules for the icon presented on results page
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

    //guard to return loading if API is slow
    if (!city.wind && !city.main) { 
        return  <div className="loading">
                    <img className="loadingImg" src={loading} alt="Loading Icon"></img>
                    <span className="loadingText"></span>
                </div>
        } else {
        // convert Kelvin to Fahrenheit and floor it
        const temp = Math.floor(( city.main.temp - 273.15 ) * 9/5 + 32)
        const tempMin = Math.floor(( city.main.temp_min - 273.15 ) * 9/5 + 32)
        const tempMax = Math.floor(( city.main.temp_max - 273.15 ) * 9/5 + 32)

        wind = Math.floor(city.wind.speed)      // floor wind speed

        weatherIcon()       //calling icon function from above

    return (
        <div className="result-city-container">
            <h2 className="popular-cities-title">{city.name}</h2>
            <div className="backButton">
                <button className="back" onClick={() => history.goBack()}>Back to City List</button>
            </div>
            <div className="popular-city">
                <div className="popular-city-content-container">
                    <img className="weather-icon" src={icon} alt={altText}></img>
                    <div className="popular-city-text">
                        <div>City: {city.name}</div>
                        <div>Temp: {temp}ºF</div>
                        <div>Temp Min: {tempMin}ºF</div>
                        <div>Temp Max: {tempMax}ºF</div>
                        <div>Condition: {city.weather[0].main}</div>
                        <div>Wind: {wind}mph</div>
                        <div>Humidity: {city.main.humidity}%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default CityResult;