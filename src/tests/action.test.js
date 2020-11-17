import * as reducerAction from '../redux/actions/index';

describe('App actions', () => {
  const food = 'food';
  const generalHealth = 'generalHealth';
  const medication = 'medication';
  const user = 'user';
  const treat = 'treat';
  const appointment = 'appointment';
  const walk = 'walk';

  it('should create a food', () => {
    const expectedAction = {
      type: 'ADD_FOODS',
      payload: food,
    };
    expect(reducerAction.addFoods(food)).toEqual(expectedAction);
  });

  it('should get all foods', () => {
    const expectedAction = {
      type: 'GET_FOODS',
      payload: food,
    };
    expect(reducerAction.getFoods(food)).toEqual(expectedAction);
  });

  it('should get a specific food', () => {
    const expectedAction = {
      type: 'GET_FOODS_ID',
      payload: food,
    };
    expect(reducerAction.getFoodsId(food)).toEqual(expectedAction);
  });

  it('should create a general health entry', () => {
    const expectedAction = {
      type: 'ADD_GENERAL_HEALTHS',
      payload: generalHealth,
    };
    expect(reducerAction.addGeneralHealths(generalHealth)).toEqual(
      expectedAction,
    );
  });

  it('should get all general health entries', () => {
    const expectedAction = {
      type: 'GET_GENERAL_HEALTHS',
      payload: generalHealth,
    };
    expect(reducerAction.getGeneralHealths(generalHealth)).toEqual(
      expectedAction,
    );
  });

  it('should get a specific general health entry', () => {
    const expectedAction = {
      type: 'GET_GENERAL_HEALTHS_ID',
      payload: generalHealth,
    };
    expect(reducerAction.getGeneralHealthsId(generalHealth)).toEqual(
      expectedAction,
    );
  });

  it('should get create a medication', () => {
    const expectedAction = {
      type: 'ADD_MEDICATIONS',
      payload: medication,
    };
    expect(reducerAction.addMedications(medication)).toEqual(expectedAction);
  });
  it('should get all medications', () => {
    const expectedAction = {
      type: 'GET_MEDICATIONS',
      payload: medication,
    };
    expect(reducerAction.getMedications(medication)).toEqual(expectedAction);
  });

  it('should get a specific medication', () => {
    const expectedAction = {
      type: 'GET_MEDICATIONS_ID',
      payload: medication,
    };
    expect(reducerAction.getMedicationsId(medication)).toEqual(expectedAction);
  });

  it('should get create a treat', () => {
    const expectedAction = {
      type: 'ADD_TREATS',
      payload: treat,
    };
    expect(reducerAction.addTreats(treat)).toEqual(expectedAction);
  });
  it('should get all treats', () => {
    const expectedAction = {
      type: 'GET_TREATS',
      payload: treat,
    };
    expect(reducerAction.getTreats(treat)).toEqual(expectedAction);
  });

  it('should get a specific treat', () => {
    const expectedAction = {
      type: 'GET_TREATS_ID',
      payload: treat,
    };
    expect(reducerAction.getTreatsId(treat)).toEqual(expectedAction);
  });
  it('should get create a walk', () => {
    const expectedAction = {
      type: 'ADD_WALKS',
      payload: walk,
    };
    expect(reducerAction.addWalks(walk)).toEqual(expectedAction);
  });
  it('should get all walks', () => {
    const expectedAction = {
      type: 'GET_WALKS',
      payload: walk,
    };
    expect(reducerAction.getWalks(walk)).toEqual(expectedAction);
  });

  it('should get a specific walk', () => {
    const expectedAction = {
      type: 'GET_WALKS_ID',
      payload: walk,
    };
    expect(reducerAction.getWalksId(walk)).toEqual(expectedAction);
  });
  it('should get create a appointment', () => {
    const expectedAction = {
      type: 'ADD_APPOINTMENTS',
      payload: appointment,
    };
    expect(reducerAction.addAppointments(appointment)).toEqual(expectedAction);
  });
  it('should get all appointments', () => {
    const expectedAction = {
      type: 'GET_APPOINTMENTS',
      payload: appointment,
    };
    expect(reducerAction.getAppointments(appointment)).toEqual(expectedAction);
  });

  it('should get a specific appointment', () => {
    const expectedAction = {
      type: 'GET_APPOINTMENTS_ID',
      payload: appointment,
    };
    expect(reducerAction.getAppointmentsId(appointment)).toEqual(
      expectedAction,
    );
  });

  it('should log in user', () => {
    const expectedAction = {
      type: 'LOGIN_USER',
      payload: user,
    };
    expect(reducerAction.loginUser(user)).toEqual(expectedAction);
  });
});
