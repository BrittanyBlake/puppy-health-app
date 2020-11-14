import React from 'react';
import './App.css';
import {
  Switch, Route,
} from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import Profile from './components/profile/Profile';
import Walks from './components/walks/Walks';
import WalkDetails from './components/walks/WalkDetails';
import Medication from './components/medication/Medication';
import FoodList from './container/track/FoodList';
import AddWalks from './components/walks/addWalks';
import AddTreats from './components/treats/addTreats';
import AddMedications from './components/medication/AddMedications';
import AddGeneralHealths from './components/general/AddGeneralHealths';
import AddFoods from './components/food/AddFoods';
import MedicationDetails from './components/medication/MedicationDetails';
import SignUpForm from './components/signUp/SignUpForm';
import Calendar from './components/calendar/Calendar';
import AddAppointments from './components/appointments/AddAppointments';
import FoodInfo from './container/details/FoodInfo';
import TreatsList from './container/track/TreatsList';
import TreatsInfo from './container/details/TreatsInfo';
import AppointmentsList from './container/track/AppointmentsList';
import AppointmentsInfo from './container/details/AppointmentsInfo';
import GeneralHealthList from './container/track/GeneralHealthList';
import GeneralHealthInfo from './container/details/GeneralHealthInfo';

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
        <Route exact path="/appointments" component={AppointmentsList}>
          {currentUser ? <AppointmentsList /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/appointments/:appointmentDetailsIndex"
          component={AppointmentsInfo}
        />
        <Route exact path="/treats" component={TreatsList}>
          {currentUser ? <TreatsList /> : <LoginForm />}
        </Route>
        <Route exact path="/treats/:treatDetailsIndex" component={TreatsInfo} />
        <Route exact path="/medication" component={Medication}>
          {currentUser ? <Medication /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/medication/:medicationDetailsIndex"
          component={MedicationDetails}
        />
        <Route exact path="/general" component={GeneralHealthList}>
          {currentUser ? <GeneralHealthList /> : <LoginForm />}
        </Route>
        <Route
          exact
          path="/general/:generalDetailsIndex"
          component={GeneralHealthInfo}
        />
        <Route exact path="/food" component={FoodList}>
          {currentUser ? <FoodList /> : <LoginForm />}
        </Route>
        <Route exact path="/food/:foodDetailsIndex" component={FoodInfo} />
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
