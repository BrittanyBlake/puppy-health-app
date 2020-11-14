import React from 'react';
import './App.css';
import {
  Switch, Route,
} from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import Profile from './components/profile/Profile';
import Walks from './components/walks/Walks';
import WalkDetails from './components/walks/WalkDetails';
import Treats from './components/treats/Treats';
import TreatDetails from './components/treats/TreatDetails';
import Medication from './components/medication/Medication';
import FoodList from './container/track/FoodList';
import FoodDetails from './components/food/FoodDetails';
import GeneralDetails from './components/general/GeneralDetails';
import General from './components/general/General';
import AddWalks from './components/walks/addWalks';
import AddTreats from './components/treats/addTreats';
import AddMedications from './components/medication/AddMedications';
import AddGeneralHealths from './components/general/AddGeneralHealths';
import AddFoods from './components/food/AddFoods';
import MedicationDetails from './components/medication/MedicationDetails';
import SignUpForm from './components/signUp/SignUpForm';
import Calendar from './components/calendar/Calendar';
import AppointmentDetails from './components/appointments/AppointmentDetails';
import Appointments from './components/appointments/Appointments';
import AddAppointments from './components/appointments/AddAppointments';

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
        <Route exact path="/appointments" component={Appointments}>
          {currentUser ? <Appointments /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/appointments/:appointmentDetailsIndex"
          component={AppointmentDetails}
        />
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
        <Route exact path="/food" component={FoodList}>
          {currentUser ? <FoodList /> : <LoginForm />}
        </Route>
        <Route exact path="/food/:foodDetailsIndex" component={FoodDetails} />
        <Route exact path="/addwalk" component={AddWalks}>
          {currentUser ? <AddWalks /> : <LoginForm />}
        </Route>
        <Route exact path="/newappointments" component={AddAppointments}>
          {currentUser ? <AddAppointments /> : <LoginForm />}
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
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </div>
  );
}

export default App;
