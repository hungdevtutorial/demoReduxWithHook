import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducer/index'; // rootReducer, that were defined
// in combineReducer..

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleWare),
  );
}
// In previous section, we defined about actions to handle "what happend",
// reducer to update new state value...
// And what is store doing.
// Simple you can thing the store is bring them together
// Ok now next step...

// Well, i forgive to import middleware to handle asynchronous action
// Because reducer and redux is only synchronous
// If we want to use dispatch function we need to import redux thunk or redux sage
