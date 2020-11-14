import userReducer from '../../redux/reducers/userReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get users', () => {
  const initialState = {};

  it('should return the initial state', () => {
    expect(
      userReducer(undefined, {
        type: reducerAction.getUsers,
      }),
    ).toEqual(initialState);
  });
});
