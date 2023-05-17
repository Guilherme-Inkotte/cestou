import { StackScreenProps } from '@react-navigation/stack';

export enum ScreenNames {
  Welcome = 'Welcome',
  Signup = 'Signup',
}

// Auth Stack
export type AuthStackParamList = {
  Welcome: undefined;
  Signup: undefined;
};

export type WelcomeScreenProps = StackScreenProps<
  AuthStackParamList,
  ScreenNames.Welcome
>;

export type SignupScreenProps = StackScreenProps<
  AuthStackParamList,
  ScreenNames.Signup
>;
