import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../../api/healthTracker';
import Appointments from '../../components/appointments/Appointments';

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const allAppointments = useSelector(state => state.appointments);

  useEffect(() => {
    const getAppointment = () => {
      dispatch(PuppyHealthApi.getAppointments());
    };
    getAppointment();
  }, [dispatch]);

  if (!allAppointments) {
    return null;
  }

  return <Appointments allAppointments={allAppointments} />;
};

export default AppointmentsList;
