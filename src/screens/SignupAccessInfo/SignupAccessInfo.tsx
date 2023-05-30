import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import {
  ScreenNames,
  SignupAccessInfoScreenProps,
} from '../../navigation/types';

import { createStyles } from './styles';
import { Button, Divider, Input, Text } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignupAccessInfo: React.FC<SignupAccessInfoScreenProps> = () => {
  const { navigate } =
    useNavigation<SignupAccessInfoScreenProps['navigation']>();
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const styles = createStyles({ theme, top });
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text type="header">Cadastro</Text>
      <Divider customStyle={styles.divider} />
      <Text customStyle={styles.subtitle}>
        Por favor, preencha suas informações de acesso
      </Text>
      <Input
        label="Apelido"
        value={nickname}
        onChangeText={setNickname}
        placeholder="Escolha seu apelido"
        customContainerStyle={styles.inputContainer}
      />
      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        customContainerStyle={styles.inputContainer}
      />
      <Input
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Escolha uma senha"
        secureTextEntry
        customContainerStyle={styles.inputContainer}
      />
      <Input
        label="Confirme a Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Digite novamente a senha"
        secureTextEntry
        customContainerStyle={styles.inputContainer}
      />
      <Input
        label="Telefone"
        value={phone}
        onChangeText={setPhone}
        placeholder="(00) 99999-9999"
        customContainerStyle={styles.inputContainer}
      />
      <Button
        label="Continuar"
        onPress={() => navigate(ScreenNames.SignupPlayerInfo)}
      />
    </ScrollView>
  );
};

export default SignupAccessInfo;
