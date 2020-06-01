import * as type from './type';
// Action will be look like a middleware for you to communicate with reducer
// Beacause you can directly change state in reducer than you need action to do this

export const increment = () => {
  return {
    type: type.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: type.DECREMENT,
  };
};

// I defined about action and reducer because I will do an simple example about conter app
// We will have 1 text with number and 2 button to increase and decrease value
//That's all, very simple for everyone !!
// Don't worry, I will be explain ..
