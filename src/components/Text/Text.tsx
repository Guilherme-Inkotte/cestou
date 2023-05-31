import React from 'react';
import { Text as RNText } from 'react-native';
import { createStyles } from './styles';
import { TextProps } from './types';
import { useTheme } from '@react-navigation/native';

const Text: React.FC<TextProps> = ({
  type = 'paragraph',
  customStyle,
  children,
  ...props
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme, type });
  return (
    <RNText {...props} style={[styles.container, customStyle]}>
      {children}
    </RNText>
  );
};

export default Text;
