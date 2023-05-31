import { StyleSheet } from 'react-native';
import { InputStyleProps } from './types';

export const createStyles = ({ theme }: InputStyleProps) => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    label: {
      marginBottom: 8,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: theme?.colors.positive,
      borderRadius: 8,
      borderWidth: 1,
      paddingHorizontal: 12,
      color: theme?.colors.text,
      ...theme?.typography.input,
    },
  });
};
