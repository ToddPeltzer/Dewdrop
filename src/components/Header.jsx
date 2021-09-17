import React from 'react';
import { Link, Route } from 'react-router-dom'
import Logo from '../images/cloud.png'
import Search from './Search'
import '../App.css'

function Header(props) {

    return (
        <div className="header-container">

            <div className="header-logo">
                <Link to="/"><img src={Logo} alt="cloud-logo" width= "300px" height= "190px"></img></Link>
            </div>
            
            <div className="header-name">
                <Link to="/" style={{ color: '#E3F4FE', textDecoration: 'none', fontSize: '50px' }}>Dewdrop</Link>
            </div>

            <div className="header-state-list">
                <Link to="/states" style={{ color: '#E3F4FE', textDecoration: 'none', fontSize: '50px' }}>State List</Link>
                <div className="search-bar">
                    <Route render={(routerProps) => (
                        <Search match= {routerProps} />
                    )}
                        />
                </div>
            </div>
            
        </div>
    );
}

export default Header;