import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignupAccessInfoScreen,
  SignupPlayerInfoScreen,
  Welcome,
} from '../screens';
import { AuthStackParamList, ScreenNames } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.Welcome} component={Welcome} />
      <Stack.Screen
        name={ScreenNames.SignupAccessInfo}
        component={SignupAccessInfoScreen}
      />
      <Stack.Screen
        name={ScreenNames.SignupPlayerInfo}
        component={SignupPlayerInfoScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
