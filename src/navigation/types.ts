import { StackScreenProps } from '@react-navigation/stack';

export enum ScreenNames {
  Welcome = 'Welcome',
}

// Auth Stack
export type AuthStackParamList = {
  Welcome: undefined;
};

export type WelcomeScreenProps = StackScreenProps<
  AuthStackParamList,
  ScreenNames.Welcome
>;
