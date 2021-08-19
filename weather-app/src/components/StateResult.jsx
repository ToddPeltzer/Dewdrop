import React, { useState, useEffect } from 'react';

function StateResult(props) {

    const [states, setStates] = useState()

    const searchInfo = {
        url: "api.openweathermap.org/data/2.5/weather?",
        key: "ba2e4832ccee6deccfb7d5e2eddd0470"
    }        
        useEffect (() => {
            const url  = `//${searchInfo.url}q=miami&appid=${searchInfo.key}`
            fetch(url)
            .then((res) => {
               return res.json()
            })
            .then((res) => {
                setStates(res)
                console.log('LOOK HERE', res)
            })
            .catch(console.error)
        }, [])

    return (
            <section>
                {states.name}
                {states.weather.main}
                {states.wind.speed}
                {states.main.temp}
            </section>
    );
}

export default StateResult;