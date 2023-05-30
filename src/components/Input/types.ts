import { StyleProp, TextInputProps, ViewStyle } from 'react-native/types';
import { DefaultStyleProps } from '../../types/default';

export type InputProps = {
  label?: string;
  customContainerStyle?: StyleProp<ViewStyle>;
  customInputStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export type InputStyleProps = {} & DefaultStyleProps;
