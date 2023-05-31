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
    divider: {
      marginVertical: 12,
    },
    subtitle: {
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    row: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 8,
    },
    radioButton: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderColor: theme?.colors.text,
      borderWidth: 2,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButtonFill: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: theme?.colors.text,
    },
    checkbox: {
      height: 16,
      width: 16,
      borderRadius: 4,
      borderColor: theme?.colors.text,
      borderWidth: 2,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxFill: {
      height: 10,
      width: 10,
      borderRadius: 2,
      backgroundColor: theme?.colors.text,
    },
  });
};
