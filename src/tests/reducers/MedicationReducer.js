import MedicationsReducer from '../../redux/reducers/MedicationReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get medications', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(
      MedicationsReducer(undefined, {
        type: reducerAction.getMedications,
      }),
    ).toEqual(initialState);
  });
});
