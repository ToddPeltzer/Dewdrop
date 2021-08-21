import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'
import '../styling/cities.css'


function Cities({ match }) {


    const [cities, setCities] = useState(StateData)

    //filtering out JSON to get only the cities within the state user clicked on
    let newCities = cities.filter(item => item.name == match.params.id)[0].city

    return (
            <div>
                <span className="citiesTitle">Cities in {match.params.id}</span>
                <section className="citiesList">
                {newCities.map(location => {
                    return (
                        
                    <Link className="citiesLink" to={`/states/cities/${location}`} key={location}>
                            <div>
                                <span className="citiesName">{location}</span>
                            </div>
                    </Link>
                    )
                })}
                </section>
            </div> 
    );
}

export default Cities;
