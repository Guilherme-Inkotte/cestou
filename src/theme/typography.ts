import { TextStyle } from 'react-native/types';

export type Typography =
  | 'header'
  | 'paragraph'
  | 'buttonLabel'
  | 'inputLabel'
  | 'input';

export const typography: Record<Typography, TextStyle> = {
  header: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  inputLabel: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  input: {
    fontSize: 16,
    lineHeight: 20,
  },
};
