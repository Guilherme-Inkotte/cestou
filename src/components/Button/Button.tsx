import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStyles } from './styles';
import { Text } from '..';
import { ButtonProps } from './types';
import { useTheme } from '@react-navigation/native';

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  label,
  onPress,
  customStyle,
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme, type });
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
