import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import StateData from '../state-data.json'


function Sidebar(props) {

    const [states, setStates] = useState(StateData)

    

    return (
        <div>
            <section className="stateList">
                {states.map(state => {
                    return (
                    <Link to={`/states/${state.name}`} key={state.name}>
                            <div>
                                <li>{state.name}</li>
                            </div>
                    </Link>
                    )
                })}
            </section>  
        </div>
       
    );
}

export default Sidebar;