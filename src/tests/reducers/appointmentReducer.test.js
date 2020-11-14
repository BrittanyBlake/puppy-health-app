import AppointmentReducer from '../../redux/reducers/AppointmentReducer'
import * as reducerAction from "../../redux/actions/index";

describe("get appointments", () => {
  const initialState = [];

  it("should return the initial state", () => {
    expect(
      AppointmentReducer(undefined, {
        type: reducerAction.getAppointments,
      })
    ).toEqual(initialState);
  });
});
