import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import StateData from '../state-data.json'
import '../App.css'


function Cities({ match }) {


    const [cities, setCities] = useState(StateData)     //setting variable cities to JSON data
    const [search, setSearch] = useState("")        //setting variable search to empty string

    let newCities = cities.filter(item => item.name == match.params.id)[0].city     //filtering out JSON to get only the cities within the state user clicked on

    
    let history = useHistory()      //function for back button to revert to previously visited page


    return (
            <div className="popular-cities-container">
                <span className="citiesTitle">Cities in {match.params.id}</span>
                <div className="cityFilter">
                    <input type="text" placeholder="Filter Cities..." onChange={e => {setSearch(e.target.value)}}/>
                </div>
                <div className="backButton">
                    <button className="back" onClick={() => history.goBack()}>Back to State List</button>
                </div>
                <section className="citiesList">     
                    {/*filters the city for our filter bar based on active user input*/}
                    {newCities.filter((location) => {
                        if (search == "") {
                            return location
                        } else if (location.toLowerCase().includes(search.toLowerCase())) {
                            return location
                        }
                    }).map(location => {        // maps through locations or filtered locations that match input in filter bar
                        return (    
                            <div className="buttonContainer">
                                <button className="buttonLink">
                                <Link className="citiesLink" to={`/states/cities/${location}`} key={location}>      {/* links to the result page based on user selection */}
                                    <div>
                                        <span className="citiesName">{location}</span>
                                    </div>
                                </Link>
                                </button>
                            </div>
                        )
                    })}
                </section>
            </div> 
    );
}

export default Cities;
