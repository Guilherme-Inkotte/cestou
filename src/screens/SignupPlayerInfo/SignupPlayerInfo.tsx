import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { SignupPlayerInfoScreenProps } from '../../navigation/types';

import { createStyles } from './styles';
import { Button, Divider, Input, Text } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignupAccessInfoScreen: React.FC<SignupPlayerInfoScreenProps> = () => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const styles = createStyles({ theme, top });
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text type="header">Cadastro</Text>
      <Divider customStyle={styles.divider} />
      <Text customStyle={styles.subtitle}>
        Por favor, preencha suas informações de jogo
      </Text>
      <Input
        label="Altura (cm)"
        value={height}
        onChangeText={setHeight}
        placeholder="Preencha sua altura"
        customContainerStyle={styles.inputContainer}
      />
      <Input
        label="Peso (Kg)"
        value={weight}
        onChangeText={setWeight}
        placeholder="Preencha seu peso"
        customContainerStyle={styles.inputContainer}
      />
      <Input
        label="Time do coração (opcional)"
        value={favoriteTeam}
        onChangeText={setFavoriteTeam}
        placeholder="Qual seu time favorito?"
        customContainerStyle={styles.inputContainer}
      />
      <Button label="Finalizar" onPress={() => {}} />
    </ScrollView>
  );
};

export default SignupAccessInfoScreen;
