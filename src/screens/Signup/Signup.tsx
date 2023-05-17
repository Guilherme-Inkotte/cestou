import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { SignupScreenProps } from '../../navigation/types';

import { createStyles } from './styles';
import { Text } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Welcome: React.FC<SignupScreenProps> = () => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const styles = createStyles({ theme, top });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text type="header">Cadastro</Text>
    </ScrollView>
  );
};

export default Welcome;
