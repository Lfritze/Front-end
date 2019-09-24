import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import navlink from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';
import LoginForm from './components/loginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>
        <Route path='/login' component={LoginForm} />
      </Router>
    </div>
  );
}

export default App;
