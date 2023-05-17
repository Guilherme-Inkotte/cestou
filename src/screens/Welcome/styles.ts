import { StyleSheet } from 'react-native';
import { DefaultStyleProps } from '../../types/default';

export const createStyles = ({ theme }: DefaultStyleProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    imageContainer: {
      height: '100%',
      width: '100%',
    },
    linearGradient: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      padding: 24,
    },
    message: {
      marginBottom: 4,
    },
    divider: {
      height: 1,
      width: '100%',
      backgroundColor: theme.colors.primary,
      marginVertical: 16,
    },
    button: {
      marginTop: 12,
    },
  });
