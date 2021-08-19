import React from 'react';
import { Link } from 'react-router-dom'
import States from './States';


function Header(props) {
    return (
        <div>
            <span>
                <Link to="/">Weather App</Link>
            </span>
            <span>
                <Link to="/states">State List</Link>
            </span>
            <span>
                <Link to="/states/">City List</Link>
            </span>
            
        </div>
    );
}

export default Header;