import React from 'react';
import NewYork from '../home-display/NewYork';
import LosAngeles from '../home-display/LosAngeles';
import Chicago from '../home-display/Chicago';
import Houston from '../home-display/Houston'
import Seattle from '../home-display/Seattle';
import Miami from '../home-display/Miami'
import Philadelphia from '../home-display/Philadelphia'
import Phoenix from '../home-display/Phoenix'
import SanJose from '../home-display/SanJose'
import SanDiego from '../home-display/SanDiego'
import '../App.css'

function Home(props) {


    return (
            <div className="popular-cities-container">
                <div className="popular-cities-title"><h2>Popular Cities</h2></div>
                <div className="popular-cities-list">
                    <div className="popular-city"><Seattle /></div>
                    <div className="popular-city"><SanJose /></div>
                    <div className="popular-city"><LosAngeles /></div>
                    <div className="popular-city"><SanDiego /></div>
                    <div className="popular-city"><Phoenix /></div>
                    <div className="popular-city"><Chicago /></div>
                    <div className="popular-city"><Houston /></div>
                    <div className="popular-city"><Philadelphia /></div>
                    <div className="popular-city"><NewYork /></div>
                    <div className="popular-city"><Miami /></div>
                </div>
            </div>
    );}


export default Home;