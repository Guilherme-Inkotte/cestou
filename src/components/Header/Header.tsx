import React from 'react';
import { View } from 'react-native';
import { createStyles } from './styles';
import { HeaderProps } from './types';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '../Text/Text';

const Header: React.FC<HeaderProps> = ({}) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const styles = createStyles({ theme, top });
  return (
    <View style={styles.container}>
      <Text type="header">Cestou</Text>
    </View>
  );
};

export default Header;
