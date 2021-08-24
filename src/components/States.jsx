import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'
import '../styling/states.css'


function States(props) {

    const [states, setStates] = useState(StateData)     //setting states variable to JSON
    const [search, setSearch] = useState("")        //setting search variable to empty string
    
    return (
        <div>
            <span className="statesTitle">State List</span>
            {/* filter for state list */}
            <div className="stateFilter">
                <input type="text" placeholder="Filter States..." onChange={e => {setSearch(e.target.value)}}/>
            </div>
            <section className="stateList">
                {/*filters the city for our filter bar based on active user input*/}
                {states.filter((state) => {
                    if (search == "") {
                        return state.name
                    } else if (state.name.toLowerCase().includes(search.toLowerCase())) {
                        return state.name
                    }
                }).map(state => {       // maps through locations or filtered locations that match input in filter bar
                    return (
                        <div className="buttonContainer">
                            <button className="buttonLink">
                                <Link className="statesLink" to={`/states/${state.name}`} key={state.name}>
                                    <div>
                                        <span>{state.name}</span>
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

export default States;