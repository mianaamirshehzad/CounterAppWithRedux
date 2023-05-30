import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import Counter from './src/screens/Counter';
import store from './src/redux/Store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './src/redux/reducers/counterReducer';



const App = (props) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer
    }
  });
  return (
    < Provider store={store} >
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default App;
