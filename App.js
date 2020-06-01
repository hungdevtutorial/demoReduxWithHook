/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import MainScreen from './src/feature/view/index';
import {Provider} from 'react-redux';
import configureStore from './src/configuration/redux/store/index';
const store = configureStore(); // call to store what we have config

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </View>
  );
};

export default App;
