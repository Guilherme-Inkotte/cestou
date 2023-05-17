import { StyleProp, ViewStyle } from 'react-native/types';
import { DefaultStyleProps } from '../../types/default';

export type ButtonType = 'primary' | 'secondary';

export type ButtonProps = {
  type?: ButtonType;
  label: string;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
};

export type ButtonStyleProps = {
  type: ButtonType;
} & DefaultStyleProps;
