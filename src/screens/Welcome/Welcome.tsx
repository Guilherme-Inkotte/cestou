import React from 'react';
import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';

import { WelcomeScreenProps } from '../../navigation/types';

import { createStyles } from './styles';
import { Button, Text } from '../../components';

const Welcome: React.FC<WelcomeScreenProps> = () => {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={require('../../assets/images/welcome-background.jpeg')}>
        <LinearGradient
          colors={['#00000000', '#00000099', '#000000FF']}
          style={styles.linearGradient}>
          <Text type="header" customStyle={styles.message}>
            Bem-vindo ao Cestou!
          </Text>
          <Text>Seu basquete semanal</Text>
          <View style={styles.divider} />
          <Text>É seu primeiro acesso?</Text>
          <Button
            customStyle={styles.button}
            label="Sim, quero me cadastrar"
            onPress={() => {}}
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
