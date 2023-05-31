import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { SignupPlayerInfoScreenProps } from '../../navigation/types';

import { createStyles } from './styles';
import { Button, Divider, Input, Text } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Roles } from '../../types/user';

const SignupAccessInfoScreen: React.FC<SignupPlayerInfoScreenProps> = () => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const styles = createStyles({ theme, top });
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [mainHand, setMainHand] = useState('');
  const [roles, setRoles] = useState<Roles>({
    center: false,
    powerForward: false,
    smallForward: false,
    pointGuard: false,
    shootingGuard: false,
  });
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
      <View style={styles.inputContainer}>
        <Text type="inputLabel">Mão predominante</Text>
        <TouchableOpacity
          onPress={() => setMainHand('left')}
          style={styles.row}>
          <View style={styles.radioButton}>
            {mainHand === 'left' && <View style={styles.radioButtonFill} />}
          </View>
          <Text>Esquerda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMainHand('right')}
          style={styles.row}>
          <View style={styles.radioButton}>
            {mainHand === 'right' && <View style={styles.radioButtonFill} />}
          </View>
          <Text>Direita</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMainHand('both')}
          style={styles.row}>
          <View style={styles.radioButton}>
            {mainHand === 'both' && <View style={styles.radioButtonFill} />}
          </View>
          <Text>Ambidestro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text type="inputLabel">Posições preferidas</Text>
        <TouchableOpacity
          onPress={() => setRoles(old => ({ ...old, center: !old.center }))}
          style={styles.row}>
          <View style={styles.checkbox}>
            {roles.center && <View style={styles.checkboxFill} />}
          </View>
          <Text>Pivô (C)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setRoles(old => ({ ...old, powerForward: !old.powerForward }))
          }
          style={styles.row}>
          <View style={styles.checkbox}>
            {roles.powerForward && <View style={styles.checkboxFill} />}
          </View>
          <Text>Ala-pivô (PF)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setRoles(old => ({ ...old, smallForward: !old.smallForward }))
          }
          style={styles.row}>
          <View style={styles.checkbox}>
            {roles.smallForward && <View style={styles.checkboxFill} />}
          </View>
          <Text>Ala (SF)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setRoles(old => ({ ...old, shootingGuard: !old.shootingGuard }))
          }
          style={styles.row}>
          <View style={styles.checkbox}>
            {roles.shootingGuard && <View style={styles.checkboxFill} />}
          </View>
          <Text>Ala-armador (SG)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setRoles(old => ({ ...old, pointGuard: !old.pointGuard }))
          }
          style={styles.row}>
          <View style={styles.checkbox}>
            {roles.pointGuard && <View style={styles.checkboxFill} />}
          </View>
          <Text>Armador (PG)</Text>
        </TouchableOpacity>
      </View>
      <Button label="Finalizar" onPress={() => {}} />
    </ScrollView>
  );
};

export default SignupAccessInfoScreen;
