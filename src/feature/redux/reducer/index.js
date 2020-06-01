import * as ActionType from '../actions/type';

const defaultState = {
  value: 0, // this is default state..
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT: // call to action type..
      return {
        ...state,
        value: state.value + 1, // place to handle logic to return new state value
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default reducer;
// Ok if you don't know anything about redux you will think reducer is look like
// the place which is handle simple logic of feature to return state like calculate, set value, get value ....
// But if you want to call API you can't handle in this reducer, you maybe use redux
// redux thiunk or redux Sage, middleware ... to handle this.
// But at this project we use Redux thunk for arsynchronous

//That is so long story to tell :))..
// Ok let do next step ..
