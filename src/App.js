import React from 'react';
import './App.css';
import {
  Switch, Route,
} from 'react-router-dom';
// import SignUpForm from './components/signUp/SignUpForm';
import LoginForm from './components/login/LoginForm';
import Homepage from './components/homepage/Homepage';
// import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/homepage" exact component={Homepage} />
        <Route path="/login" exact component={LoginForm} />
      </Switch>
      <LoginForm />
    </div>
  );
}

export default App;
