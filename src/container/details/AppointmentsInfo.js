import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppointmentsId } from '../../api/healthTracker';
import AppointmentDetails from '../../components/appointments/AppointmentDetails';

const AppointmentsInfo = () => {
  const { appointmentDetailsIndex } = useParams();
  const dispatch = useDispatch();
  const getAppointmentDetailsId = useSelector(state => state.appointments);

  useEffect(() => {
    const appointmentDetailsId = () => {
      dispatch(PuppyHealthApi.getAppointmentsId(appointmentDetailsIndex));
    };
    appointmentDetailsId();
  }, []);

  if (!getAppointmentDetailsId) {
    return null;
  }

  return <AppointmentDetails getAppointmentDetailsId={getAppointmentDetailsId} />;
};
export default AppointmentsInfo;
