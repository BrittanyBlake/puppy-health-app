import React from 'react';
import './App.css';
import {
  Switch, Route,
} from 'react-router-dom';
// import SignUpForm from './components/signUp/SignUpForm';
import LoginForm from './components/login/LoginForm';
import Profile from './components/profile/Profile';
import Walks from './components/walks/Walks';
import WalkDetails from './components/walks/WalkDetails';
import Treats from './components/treats/Treats';
import TreatDetails from './components/treats/TreatDetails';
import Medication from './components/medication/Medication';
import Food from './components/food/Food';
import FoodDetails from './components/food/FoodDetails';
import GeneralDetails from './components/general/GeneralDetails';
import General from './components/general/General';
import AddWalks from './components/walks/addWalks';
import AddTreats from './components/treats/addTreats';
import AddMedications from './components/medication/AddMedications';
import AddGeneralHealths from './components/general/AddGeneralHealths';
import AddFoods from './components/food/AddFoods';
import MedicationDetails from './components/medication/MedicationDetails';
// import Navbar from './components/navbar/Navbar';

function App() {
  const currentUser = localStorage.getItem('token');
  console.log(currentUser);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Profile}>
          {currentUser ? <Profile /> : <LoginForm />}
        </Route>
        <Route exact path="/walks" component={Walks}>
          {currentUser ? <Walks /> : <LoginForm />}
        </Route>
        <Route exact path="/walks/:walkDetailsIndex" component={WalkDetails} />
        <Route exact path="/treats" component={Treats}>
          {currentUser ? <Treats /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/treats/:treatDetailsIndex"
          component={TreatDetails}
        />
        <Route exact path="/medication" component={Medication}>
          {currentUser ? <Medication /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/medication/:medicationDetailsIndex"
          component={MedicationDetails}
        />
        <Route exact path="/general" component={General}>
          {currentUser ? <General /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/general/:generalDetailsIndex"
          component={GeneralDetails}
        />
        <Route exact path="/food" component={Food}>
          {currentUser ? <Food /> : <LoginForm />}
        </Route>
        <Route exact path="/food/:foodDetailsIndex" component={FoodDetails} />
        <Route exact path="/addwalk" component={AddWalks}>
          {currentUser ? <AddWalks /> : <LoginForm />}
        </Route>
        <Route exact path="/addtreat" component={AddTreats}>
          {currentUser ? <AddTreats /> : <LoginForm />}
        </Route>
        <Route exact path="/addmedication" component={AddMedications}>
          {currentUser ? <AddMedications /> : <LoginForm />}
        </Route>
        <Route exact path="/addgeneralhealth" component={AddGeneralHealths}>
          {currentUser ? <AddGeneralHealths /> : <LoginForm />}
        </Route>
        <Route exact path="/addfood" component={AddFoods}>
          {currentUser ? <AddFoods /> : <LoginForm />}
        </Route>
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
