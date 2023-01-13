import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import People from './People';
import Person from './Person';
import { Route, Router } from 'react-router-dom';

const ReactRouterSetup = () =>{
    return (<Router>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/people/'>
            <People/>
        </Route>
        <Route exact path='/person'>
            <Person/>
        </Route>

    </Router>) 
    
}