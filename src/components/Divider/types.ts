import { ColorValue, ViewStyle } from 'react-native/types';
import { DefaultStyleProps } from '../../types/default';

export type DividerProps = {
  color?: ColorValue;
  customStyle?: ViewStyle;
};

export type DividerStyleProps = {
  color?: ColorValue;
} & DefaultStyleProps;
