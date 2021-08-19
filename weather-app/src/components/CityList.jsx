import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'

function CityList(props) {

    const [cityList, setCityList] = useState(StateData)

    let arrayList = cityList.map(location => { return (location.city)})
console.log(arrayList)
    let newLocation = ""

    function getCity (location) {
        for (let i=0; i<location.length; i++) {
            newLocation = location[i]
            // console.log(i)
        }
    }
    
    console.log('HEY THERE', newLocation)

return (
    <section>
                {arrayList.map(location => {
                    // console.log('LOCATION', location)
                    getCity(location)
                    return (
                            
                        <Link to={`/test`} key={location}>
                            <div>
                                <li>{location} </li><br/>
                            </div>
                        </Link>
                    
                    )
                })}
            </section> 
    )
}

export default CityList;