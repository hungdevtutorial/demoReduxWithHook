import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../redux/actions';
import {View, Text, TouchableOpacity} from 'react-native';
const App = () => {
  const counter = useSelector(state => state.counter.value);
  // I forgot this, we need to point to reducer before point to state
  // counter is reducer and value is state

  // what is value??
  // that is our state we define in reducer, do you remember ??? :))

  //use Selector look likes mapStateToProps in Class Component ..
  // they will be change our state in store to props of component..

  const dispatch = useDispatch(); //Ok dispatch to a function which is use to call action
  //beacause we can change reducer directly, we need to call action to do this...
  // remember dispatch is asynchronous then we need to import redux thunk or sage
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <TouchableOpacity onPress={() => dispatch(actions.increment())}>
        <Text>Increase Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(actions.decrement())}>
        <Text>Decrease Counter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
