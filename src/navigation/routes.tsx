import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import defaultTheme from '../theme/default';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from './types';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.AuthStack} component={AuthStack} />
        <Stack.Screen name={ScreenNames.MainStack} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
