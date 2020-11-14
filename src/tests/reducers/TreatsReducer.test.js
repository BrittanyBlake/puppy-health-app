import TreatsReducer from '../../redux/reducers/TreatsReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get treats', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(
      TreatsReducer(undefined, {
        type: reducerAction.getTreatss,
      }),
    ).toEqual(initialState);
  });
});
