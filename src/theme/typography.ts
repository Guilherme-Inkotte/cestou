import { TextStyle } from 'react-native/types';

export type Typography = 'header' | 'paragraph' | 'buttonLabel';

export const typography: Record<Typography, TextStyle> = {
  header: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    color: '#FFF',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 20,
    color: '#FFF',
  },
};
