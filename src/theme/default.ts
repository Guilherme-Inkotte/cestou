import { DefaultTheme, Theme } from '@react-navigation/native';

import { typography } from './typography';

const defaultTheme = {
  ...DefaultTheme,
  typography,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 94, 5)',
    primaryTransparent: 'rgba(255, 94, 5, 0)',
    background: 'rgb(30, 30, 30)',
    backgroundDimmed: 'rgba(30, 30, 30, 0.3)',
    positive: 'rgb(255, 255, 255)',
    divider: 'rgba(255, 255, 255, 0.3)',
    text: 'rgb(255, 255, 255)',
    textNegative: 'rgb(30, 30, 30)',
  },
};

export type AppDefaultTheme = typeof defaultTheme & Theme;
export type Color = keyof typeof defaultTheme.colors;

export type DefaultTheme = typeof defaultTheme & Theme;

export default defaultTheme as AppDefaultTheme;
