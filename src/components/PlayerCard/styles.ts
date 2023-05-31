import { StyleSheet } from 'react-native';
import { PlayerCardStyleProps } from './types';

export const createStyles = ({ theme, color }: PlayerCardStyleProps) => {
  return StyleSheet.create({
    container: {
      height: 160,
      width: '35%',
      backgroundColor: color || theme?.colors.primary,
      padding: 6,
      borderRadius: 6,
    },
    imageStyle: {
      borderRadius: 6,
      height: '100%',
      width: '100%',
    },
  });
};
