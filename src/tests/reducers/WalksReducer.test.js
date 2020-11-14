import WalksReducer from '../../redux/reducers/WalksReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get walks', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(
      WalksReducer(undefined, {
        type: reducerAction.getWalks,
      }),
    ).toEqual(initialState);
  });
});
