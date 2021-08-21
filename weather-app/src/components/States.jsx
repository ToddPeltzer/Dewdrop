import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'
import '../styling/states.css'


function States(props) {

    const [states, setStates] = useState(StateData)

    return (
        <div>
            <span className="statesTitle">State List</span>
            <section className="stateList">
                {states.map(state => {
                    return (
                        <Link className="statesLink" to={`/states/${state.name}`} key={state.name}>
                                <div>
                                    <span className="stateName">{state.name}</span>
                                </div>
                        </Link>
                    )
                })}
            </section>  
        </div>
       
    );
}

export default States;