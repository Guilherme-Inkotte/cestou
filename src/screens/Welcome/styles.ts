import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    message: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
