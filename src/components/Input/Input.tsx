import React from 'react';
import { TextInput, View } from 'react-native';
import { createStyles } from './styles';
import { Text } from '..';
import { InputProps } from './types';
import { useTheme } from '@react-navigation/native';

const Input: React.FC<InputProps> = ({
  label,
  customContainerStyle,
  customInputStyle,
  ...inputProps
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={[styles.container, customContainerStyle]}>
      {!!label && (
        <Text customStyle={styles.label} type="buttonLabel">
          {label}
        </Text>
      )}
      <TextInput
        {...inputProps}
        placeholderTextColor={theme?.colors.placeholder}
        style={[styles.input, customInputStyle]}
      />
    </View>
  );
};

export default Input;
