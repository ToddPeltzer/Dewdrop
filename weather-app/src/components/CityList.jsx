import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'

function CityList(props) {

    const [cityList, setCityList] = useState(StateData)

let newList = cityList.filter(item => item.city)
let useThis = newList.map(location => { return (location.city)})
let concatCity = useThis.concat()

    return (
            <section>
                {useThis.map(location => {
                    console.log(location)
                    return (
                        
                    <Link to={`/test`} key={location}>
                            <div>
                                <span>{location}</span>
                            </div>
                    </Link>
                    )
                })}
            </section> 
    )
}

export default CityList;