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
import '../styling/home.css'

function Home(props) {


    return (
            <div>
                <span className="popularCitiesTitle">Popular Cities</span>
                <section className="homeContainer">
                    <div className="homeCity"><Seattle /></div>
                    <div className="homeCity"><SanJose /></div>
                    <div className="homeCity"><LosAngeles /></div>
                    <div className="homeCity"><SanDiego /></div>
                    <div className="homeCity"><Phoenix /></div>
                    <div className="homeCity"><Chicago /></div>
                    <div className="homeCity"><Houston /></div>
                    <div className="homeCity"><Philadelphia /></div>
                    <div className="homeCity"><NewYork /></div>
                    <div className="homeCity"><Miami /></div>
                </section>
            </div>
    );}


export default Home;