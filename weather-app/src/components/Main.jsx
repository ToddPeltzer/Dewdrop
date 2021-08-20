import React from 'react'
import { Route } from 'react-router-dom'
import Cities from './Cities'
import States from './States'
import Home from './Home'
import CityResult from './CityResult'
// import CityList from './CityList'


function Main(props) {

    return (
        <div>
        
            <Route  exact path="/"
                    component={Home} />

            <Route  exact path="/states"
                    component={States} />
            
            {/* <Route  exact path="/test"
                    component={CityList} /> */}
            
            <Route  exact path="/states/:id"
                    render={(routerProps) => (
                        <Cities match={routerProps.match}
                        />
                    )}
            />

            <Route  exact path="/states/cities/:id"
                    render={(routerProps) => (
                        <CityResult match={routerProps.match}
                        />
                    )}
            />

        </div>
    );
}

export default Main;