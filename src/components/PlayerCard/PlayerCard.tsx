import React from 'react';
import { Image, View } from 'react-native';
import { createStyles } from './styles';
import { PlayerCardProps } from './types';
import { useTheme } from '@react-navigation/native';

const PlayerCard: React.FC<PlayerCardProps> = ({
  source,
  color,
  customStyle,
}) => {
  const theme = useTheme();
  const styles = createStyles({ theme, color });
  return (
    <View style={[styles.container, customStyle]}>
      <Image source={source} style={styles.imageStyle} />
    </View>
  );
};

export default PlayerCard;
