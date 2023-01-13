import React from 'react';
import '../index.css';
import Home from './Home';
import People from './People';
import Person from './Person';
import Error from './Error';
import Navbar from './Navbar';
import About from './About';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ReactRouterSetup = () =>{
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/people' element={<People />}></Route>
            <Route exact path='/person' element={<Person />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route  path='*' element={<Error />}></Route>
        </Routes>
    </Router>
    ) 
    
}

export default ReactRouterSetup;