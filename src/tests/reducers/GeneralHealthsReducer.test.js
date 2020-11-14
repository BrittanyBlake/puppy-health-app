import GeneralHealthsReducer from '../../redux/reducers/GeneralHealthsReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get general healths', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(
      GeneralHealthsReducer(undefined, {
        type: reducerAction.getGeneralHealths,
      }),
    ).toEqual(initialState);
  });
});
