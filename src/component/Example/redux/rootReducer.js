import { combineReducers } from "redux";

const defaultState = {
  count: 0,
};

export const increaseCountAction = (number) => ({
  type: "tang", // ACTION TYPE
  number: number, // PARAMETER
});

// Action Creator
export const decreaseCountAction = (number) => ({
  type: "giam", // ACTION TYPE
  number: number, //PARAMETER
});

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "tang":
      return { ...state, count: state.count + action.number };

    case "giam":
      const newCount = state.count - action.number;
      return { ...state, count: newCount };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
