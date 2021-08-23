import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'
import '../styling/cities.css'


function Cities({ match }) {


    const [cities, setCities] = useState(StateData)
    const [search, setSearch] = useState("")


    //filtering out JSON to get only the cities within the state user clicked on
    let newCities = cities.filter(item => item.name == match.params.id)[0].city

    return (
            <div>
                <span className="citiesTitle">Cities in {match.params.id}</span>
                <div className="cityFilter">
                <input type="text" placeholder="Filter Cities..." onChange={e => {setSearch(e.target.value)}}/>
                </div>
                <section className="citiesList">
                {newCities.filter((location) => {
                    if (search == "") {
                        return location
                    } else if (location.toLowerCase().includes(search.toLowerCase())) {
                        return location
                    }
                }).map(location => {
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
