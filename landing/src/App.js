import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';

import LoginForm from './components/onboarding/loginForm';
import SignupForm from './components/onboarding/signupForm'

import CharacterList from './components/cardList/employeeList'
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />

        <Route path='/dashboard' component={Dashboard}/>
       </Router>
    </div>
  );
}

export default App;
