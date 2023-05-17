import { StyleSheet } from 'react-native';
import { DefaultStyleProps } from '../../types/default';

export const createStyles = ({ theme, top }: DefaultStyleProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.colors.background,
    },
    contentContainer: {
      padding: 24,
      paddingTop: 24 + top!,
    },
  });
};
