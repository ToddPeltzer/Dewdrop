import React from 'react';
import { Link } from 'react-router-dom'
import '../styling/header.css'
import Logo from '../images/cloud.png'
import Search from './Search'

function Header(props) {
    console.log(Logo)

    return (
        <div className="headerContainer">
            <span className="headerLogo">
                <Link to="/"><img id="headerImage" src={Logo} alt="cloud-logo"></img></Link>
            </span>
            
            <span className="headerName">
                <Link to="/" style={{ color: '#E3F4FE', textDecoration: 'none', fontSize: '50px' }}>Weather App</Link>
            </span>

            <span className="headerStateList">
                <Link to="/states" style={{ color: '#E3F4FE', textDecoration: 'none', fontSize: '50px' }}>State List</Link>
            </span>
            <span>
                <Search />
            </span>
        </div>
    );
}

export default Header;