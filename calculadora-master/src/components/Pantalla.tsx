import { Text, type TextProps } from 'react-native';
import { styles } from '../styles/styles';

interface Props extends TextProps {
  size?: 'main' | 'secondary';
}

export const Pantalla = ({ children, size = 'main', ...rest }: Props) => {
  const pantallaStyle = size === 'main' ? styles.pantallaPrincipal : styles.pantallaSecundaria;

  return (
    <Text style={pantallaStyle} {...rest}>
      {children}
    </Text>
  );
};
