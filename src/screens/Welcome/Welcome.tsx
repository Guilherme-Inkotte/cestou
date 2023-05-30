import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useTheme } from '@react-navigation/native';

import { ScreenNames, WelcomeScreenProps } from '../../navigation/types';

import { createStyles } from './styles';
import { Button, Divider, Text } from '../../components';

const Welcome: React.FC<WelcomeScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const navigation = useNavigation<WelcomeScreenProps['navigation']>();

  StatusBar.setBarStyle('light-content');

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={require('../../assets/images/welcome-background.jpeg')}>
        <LinearGradient
          colors={[
            theme.colors.primaryTransparent,
            theme.colors.backgroundDimmed,
            theme.colors.background,
          ]}
          locations={[0, 0.5, 0.9]}
          style={styles.linearGradient}>
          <Text type="header" customStyle={styles.message}>
            Bem-vindo ao Cestou!
          </Text>
          <Text>Seu basquete semanal</Text>
          <Divider color={theme?.colors.primary} customStyle={styles.divider} />
          <Text>É seu primeiro acesso?</Text>
          <Button
            customStyle={styles.button}
            label="Sim, quero me cadastrar"
            onPress={() => navigation.navigate(ScreenNames.SignupAccessInfo)}
          />
          <Button
            type="secondary"
            customStyle={styles.button}
            label="Não, já sou membro"
            onPress={() => {}}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
