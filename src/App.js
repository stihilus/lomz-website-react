import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Drugstore from './components/Drugstore';
import Noise from './components/Noise';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/drugstore" component={Drugstore} />
        <Route path="/noise" component={Noise} />
        <Footer />
        </switch>
      </div>
    </Router>
  );
}

export default App;
