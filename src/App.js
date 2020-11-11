import React from 'react';
import './App.css';
import {
  Switch, Route,
} from 'react-router-dom';
// import SignUpForm from './components/signUp/SignUpForm';
import LoginForm from './components/login/LoginForm';
import Profile from './components/profile/Profile';
import Walks from './components/walks/Walks';
import Treats from './components/treats/Treats';
import Medication from './components/medication/Medication';
import Food from './components/food/Food';
import General from './components/general/General';
// import Navbar from './components/navbar/Navbar';

function App() {
  const currentUser = localStorage.getItem('token');
  console.log(currentUser);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/profile" component={Profile}>
          {currentUser ? <Profile /> : <LoginForm />}
        </Route>
        <Route exact path="/walks" component={Walks}>
          {currentUser ? <Walks /> : <LoginForm />}
        </Route>
        <Route exact path="/treats" component={Treats}>
          {currentUser ? <Treats /> : <LoginForm />}
        </Route>
        <Route exact path="/medication" component={Medication}>
          {currentUser ? <Medication /> : <LoginForm />}
        </Route>
        <Route exact path="/general" component={General}>
          {currentUser ? <General /> : <LoginForm />}
        </Route>
        <Route exact path="/food" component={Food}>
          {currentUser ? <Food /> : <LoginForm />}
        </Route>
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
