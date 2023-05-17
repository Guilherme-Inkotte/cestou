import { StyleSheet } from 'react-native';
import { DividerStyleProps } from './types';

export const createStyles = ({ theme, color }: DividerStyleProps) => {
  return StyleSheet.create({
    container: {
      height: 1,
      width: '100%',
      backgroundColor: color || theme?.colors.text,
    },
  });
};
