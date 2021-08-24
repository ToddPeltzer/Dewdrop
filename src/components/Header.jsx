import React from 'react';
import { Link, Route } from 'react-router-dom'
import Logo from '../images/cloud.png'
import Search from './Search'
import '../styling/header.css'

function Header(props) {

    return (
        <div className="headerContainer">
            <span className="headerLogo">
                <Link to="/"><img id="headerImage" src={Logo} alt="cloud-logo"></img></Link>
            </span>
            
            <span className="headerName">
                <Link to="/" style={{ color: '#E3F4FE', textDecoration: 'none', fontSize: '50px' }}>Dewdrop</Link>
            </span>

            <span className="headerStateList">
                <Link to="/states" style={{ color: '#E3F4FE', textDecoration: 'none', fontSize: '50px' }}>State List</Link>
                <Route render={(routerProps) => (
                    <Search match= {routerProps} />
                )}
                    />
            </span>


        </div>
    );
}

export default Header;