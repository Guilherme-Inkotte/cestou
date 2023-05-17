import {
  StyleProp,
  TextStyle,
  TextProps as RNTextProps,
} from 'react-native/types';
import { Typography } from '../../theme/typography';
import { DefaultStyleProps } from '../../types/default';

export type TextProps = {
  type?: Typography;
  customStyle?: StyleProp<TextStyle>;
} & RNTextProps;

export type TextStyleProps = {
  type: Typography;
} & DefaultStyleProps;
