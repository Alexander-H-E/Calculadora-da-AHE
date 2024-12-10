import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 10,
    width: '100%',
  },
  pantallaPrincipal: {
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400',
    width: '90%',
  },
  pantallaSecundaria: {
    fontSize: 40,
    textAlign: 'right',
    width: '90%',
  },
  button: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    borderWidth: 2,
    borderColor: 'cyan',
  },
});
