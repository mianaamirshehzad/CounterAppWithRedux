import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { increment, decrement, reset } from '../redux/Actions';
import { useSelector, useDispatch } from 'react-redux';
import counterReducer from '../redux/reducers/counterReducer';
import CustomButton from '../components/CustomButton';

const Counter = (props) => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
  return (
    < View style={styles.container} >
      <Text style={styles.text} >Counter</Text>
      <Text>
        {counter}
      </Text>
      <View style={{ flexDirection: 'row', padding: 10, margin: 9 }} >
        <CustomButton text = "Increase" onPress={() => dispatch(increment())} />
        <CustomButton text = "Decrease" onPress={() => dispatch(decrement())} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }

});

export default Counter;
