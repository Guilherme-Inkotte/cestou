import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import defaultTheme from '../theme/default';

const Routes = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
