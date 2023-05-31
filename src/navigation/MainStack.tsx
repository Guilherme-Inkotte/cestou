import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';
import { MainStackParamList, ScreenNames } from './types';
import { Header } from '../components';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, header: Header }}>
      <Stack.Screen name={ScreenNames.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
