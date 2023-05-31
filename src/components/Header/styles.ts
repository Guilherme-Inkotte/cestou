import { StyleSheet } from 'react-native';
import { HeaderStyleProps } from './types';

export const createStyles = ({ top }: HeaderStyleProps) => {
  return StyleSheet.create({
    container: {
      padding: 24,
      paddingTop: 24 + top!,
    },
  });
};
