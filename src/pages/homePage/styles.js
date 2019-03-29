import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther,
  },
  button: {
    backgroundColor: '#85e085',
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.055,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 5,
    marginTop: metrics.screenHeight * 0.73,

  },
  buttonText: {
    alignSelf: 'center',
    fontSize: metrics.screenHeight * 0.026,
    color: colors.darkTransparent,
  },
  recent: {
    fontSize: metrics.screenHeight * 0.034,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: metrics.baseMargin,
  },
});

export default styles;
