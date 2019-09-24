import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';

import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
      </Router>
    </div>
  );
}

export default App;
