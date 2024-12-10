import { Pressable, Text, StyleSheet, Vibration } from 'react-native';
import { BUTTON_COLORS, BUTTON_SIZES } from '../constants/constants';
import { styles } from '../styles/styles';

interface Props {
  label: string;
  type: 'number' | 'operator' | 'function';
  wide?: boolean;
  onPress?: () => void;
}

export const BotonOperacion = ({ label, type, wide, onPress }: Props) => {
  const buttonStyle = StyleSheet.flatten([
    styles.button,
    { backgroundColor: BUTTON_COLORS[type], width: wide ? BUTTON_SIZES.wide : BUTTON_SIZES.default },
  ]);

  const handlePress = () => {
    Vibration.vibrate(50); // Short vibration
    onPress?.();
  };

  return (
    <Pressable onPress={handlePress}>
      <Text style={buttonStyle}>{label}</Text>
    </Pressable>
  );
};
