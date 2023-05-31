import { ColorValue, ImageSourcePropType, ViewStyle } from 'react-native/types';
import { DefaultStyleProps } from '../../types/default';

export type PlayerCardProps = {
  source: ImageSourcePropType;
  color?: ColorValue;
  customStyle?: ViewStyle;
};

export type PlayerCardStyleProps = {
  color?: ColorValue;
} & DefaultStyleProps;
