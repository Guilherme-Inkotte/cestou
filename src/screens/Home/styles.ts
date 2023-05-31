import { StyleSheet } from 'react-native';
import { DefaultStyleProps } from '../../types/default';

export const createStyles = ({ theme, bottom }: DefaultStyleProps) =>
  StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: theme?.colors.background,
    },
    contentContainer: {
      padding: 24,
      paddingBottom: 24 + bottom!,
    },
    playerSection: {
      flexDirection: 'row',
      width: '100%',
    },
    playerInfo: {
      marginLeft: 16,
      flex: 1,
    },
    playerNick: {
      width: '100%',
    },
    divider: {
      marginVertical: 12,
    },
    playerStats: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    playerStatContainer: {},
    space: {
      flex: 1,
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    overallContainer: {
      height: 48,
      width: 48,
      borderRadius: 24,
      backgroundColor: theme?.colors.backgroundDimmed,
      borderWidth: 4,
      borderColor: theme?.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    overall: {
      color: theme?.colors.primary,
    },
  });
