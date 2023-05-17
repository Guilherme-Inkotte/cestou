import React from 'react';
import { Text } from 'react-native';
import { createStyles } from './styles';
import { TextProps } from './types';
import { useTheme } from '@react-navigation/native';

const Button: React.FC<TextProps> = ({
  type = 'buttonLabel',
  customStyle,
  children,
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme, type });
  return <Text style={[styles.container, customStyle]}>{children}</Text>;
};

export default Button;
