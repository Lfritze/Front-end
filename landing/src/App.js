import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';

import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm'
import RequestForm from './components/requestForm'
// miniforms
import VacationForm from './components/miniForms/vacationForm'
import BudgetForm from './components/miniForms/budgetForm'
// Cards
import CharacterList from './components/cardList/employeeList'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />

        <Route path="/card" component={CharacterList}/>
        {/* <Route path='/request' component={RequestForm}/>
        
        <Route path='/vacation' component={VacationForm} />
        <Route path='/budget' component={BudgetForm} />
         */}
       </Router>
    </div>
  );
}

export default App;
