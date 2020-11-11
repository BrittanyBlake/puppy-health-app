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
  const currentUser = localStorage.getItem('token');
  console.log(currentUser);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/homepage" component={Homepage}>
          {currentUser ? <Homepage /> : <LoginForm /> }
        </Route>
        <Route path="/login" exact component={LoginForm} />
      </Switch>
      <LoginForm />
    </div>
  );
}

export default App;
