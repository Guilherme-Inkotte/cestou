import { StackScreenProps } from '@react-navigation/stack';

export enum ScreenNames {
  AuthStack = 'AuthStack',
  MainStack = 'MainStack',
  Home = 'Home',
  Welcome = 'Welcome',
  SignupAccessInfo = 'SignupAccessInfo',
  SignupPlayerInfo = 'SignupPlayerInfo',
}

// Auth Stack
export type AuthStackParamList = {
  Welcome: undefined;
  SignupAccessInfo: undefined;
  SignupPlayerInfo: undefined;
};

export type WelcomeScreenProps = StackScreenProps<
  AuthStackParamList,
  ScreenNames.Welcome
>;

export type SignupAccessInfoScreenProps = StackScreenProps<
  AuthStackParamList,
  ScreenNames.SignupAccessInfo
>;

export type SignupPlayerInfoScreenProps = StackScreenProps<
  AuthStackParamList,
  ScreenNames.SignupPlayerInfo
>;

// Main Stack
export type MainStackParamList = {
  Home: undefined;
};

export type HomeScreenProps = StackScreenProps<
  MainStackParamList,
  ScreenNames.Home
>;
