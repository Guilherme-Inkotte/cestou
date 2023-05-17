import { StyleSheet } from 'react-native';
import { ButtonStyleProps } from './types';

export const createStyles = ({ theme, type }: ButtonStyleProps) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        type === 'primary' ? theme.colors.primary : 'transparent',
      borderColor:
        type === 'primary' ? theme.colors.primary : theme.colors.positive,
      borderRadius: 8,
      borderWidth: 1,
    },
  });
};
