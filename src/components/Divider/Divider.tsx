import React from 'react';
import { View } from 'react-native';
import { createStyles } from './styles';
import { DividerProps } from './types';
import { useTheme } from '@react-navigation/native';

const Button: React.FC<DividerProps> = ({ color, customStyle }) => {
  const theme = useTheme();
  const styles = createStyles({ theme, color });
  return <View style={[styles.container, customStyle]} />;
};

export default Button;
