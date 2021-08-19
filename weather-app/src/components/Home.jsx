import React from 'react';
import { Link } from 'react-router-dom'


function Home(props) {
    return (
        <div>
            <h2>Welcome to Weather App</h2>
            <Link to="/states">CLICK HERE FOR STATE LIST</Link>
            
        </div>
    );
}

export default Home;    