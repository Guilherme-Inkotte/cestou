import React from 'react';
import { Text, View } from 'react-native';

import { WelcomeScreenProps } from '../../navigation/types';

import { createStyles } from './styles';

const Welcome: React.FC<WelcomeScreenProps> = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Bem-vindo ao Cestou!</Text>
    </View>
  );
};

export default Welcome;
