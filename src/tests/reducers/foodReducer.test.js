import foodReducer from "../../redux/reducers/foodReducer";
import * as reducerAction from "../../redux/actions/index";

describe("get foods", () => {
  const initialState = [];

  it("should return the initial state", () => {
    expect(
      foodReducer(undefined, {
        type: reducerAction.getFoods,
      })
    ).toEqual(initialState);
  });
});
