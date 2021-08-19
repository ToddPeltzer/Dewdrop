import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'


function Cities({ match, states, statesName, setStates }) {


    const [cities, setCities] = useState(StateData)
    console.log('CITY', cities)
    // setCities(match.params.id)
    // let newState = match.params.id

let newCities = cities.filter(item => item.name == match.params.id)[0].city

    return (
            <section className="stateList">
                {newCities.map(location => {
                  
                    return (
                        
                    <Link to={`/states/cities/${location}`} key={location}>
                            <div>
                                <li>{location}</li>
                            </div>
                    </Link>
                    )
                })}
            </section> 
    );
}

export default Cities;
