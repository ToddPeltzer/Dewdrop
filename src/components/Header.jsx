import React from 'react';
import { Link, Route } from 'react-router-dom'
import Logo from '../images/cloud.png'
import Search from './Search'
import CityResult from './CityResult';
import '../styling/header.css'

function Header(props) {

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

            {/* <Route  exact path="/states/cities/:id"
                    render={(routerProps) => (
                        <CityResult match={routerProps.match}
                        />
                    )}
            /> */}

        </div>
    );
}

export default Header;