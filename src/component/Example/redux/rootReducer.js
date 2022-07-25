import { combineReducers } from 'redux';

const defaultState ={
    count: 0,
}

export const increaseCountAction = (number) => ({
    type: 'tang', // ACTION TYPE
    number: number, // PARAMETER
  });
  
  // Action Creator
export const decreaseCountAction = (number) => ({
    type: 'giam', // ACTION TYPE
    number: number, //PARAMETER
  });

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'tang':
        const newCount = state.count + action.number;
        return { ...state, count: newCount };
  
      case 'giam':
        const newCount1 = state.count - action.number;
        return { ...state, count: newCount1 };
      default:
        return state;
    }
}

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer