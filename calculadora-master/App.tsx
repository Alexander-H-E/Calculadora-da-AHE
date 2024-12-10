import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { styles } from './src/styles/styles';

export default function App() {
  const {
    formula,
    numeroAnterior,
    construirNumero,
    clean,
    cambiarSigno,
    borrarDigito,
    resultado,
    realizarOperacion,
  } = useCalculadora();

  return (
    <View style={styles.container}>
      <Pantalla size="main">{formula}</Pantalla>
      <Pantalla size="secondary">{formula === numeroAnterior ? '' : numeroAnterior}</Pantalla>

      <StatusBar style="auto" />

      {[
        [
          { label: 'C', type: 'function', action: clean },
          { label: '+/-', type: 'function', action: cambiarSigno },
          { label: 'del', type: 'function', action: borrarDigito },
          { label: '/', type: 'operator', action: () => realizarOperacion('/') },
        ],
        // Add button configurations here
        // Example: [ { label: '1', type: 'number', action: () => construirNumero('1') }, ...]
      ].map((row, i) => (
        <View key={i} style={styles.fila}>
          {row.map(({ label, type, action }, j) => (
            <BotonOperacion key={j} label={label} type={type} onPress={action} />
          ))}
        </View>
      ))}
    </View>
  );
}
