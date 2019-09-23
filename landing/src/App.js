import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import landing from './components/landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>

      </Router>
    </div>
  );
}

export default App;
