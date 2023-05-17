import { StyleSheet } from 'react-native';
import { TextStyleProps } from './types';

export const createStyles = ({ theme, type }: TextStyleProps) => {
  return StyleSheet.create({
    container: {
      ...(!!type && theme.typography?.[type]),
      color: theme.colors.text,
    },
  });
};
