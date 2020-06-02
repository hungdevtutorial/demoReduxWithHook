import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducer/index'; // rootReducer, that were defined
// in combineReducer..

//*** IF YOU WANT TO USE REDUX THUNK, YOU CAN USE THIS */
// export default function configureStore(preloadedState) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunkMiddleWare),
//   );
// }

export default function configureStore() {
  return createStore(rootReducer);
}
