import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Cities(props) {

    const [cities, setCities] = useState([])

    const searchInfo = {
        input: "miami",
        url: "//api.openweathermap.org/data/2.5/weather?",
        key: 'ba2e4832ccee6deccfb7d5e2eddd0470'
    }        
        useEffect (() => {
            const url  = `${searchInfo.url}q=${searchInfo.input}&appid=${searchInfo.key}`
            fetch(url)
            .then((res) => {
               return res.json()})
            .then((res) => {
                setCities(res)
                console.log('LOOK HERE', res)
        })
        .catch(console.error)
    }, [])


// console.log('LINE 22', cities)
    if (cities===[]) {
        console.log(cities)
        return ([])
    } else {
    return (
        <section className="cityContainer">
            {cities.name}
            {/* {cities.map(city => {
                console.log(city)
                return(
                    <Link to={`q=${city.name}&appid=${searchInfo.key}`}>
                        <div className='cityName'>
                            <h3>{city.name}</h3>
                        </div>
                    </Link>
                )
            }
            )} */}
        </section>
    );
}
}
export default Cities;

