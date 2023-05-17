import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens';
import { ScreenNames } from './types';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.Welcome} component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthStack;
