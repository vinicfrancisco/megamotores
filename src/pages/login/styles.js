import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  logo: {
    width: metrics.screenWidth * 0.9,
    height: metrics.screenHeight * 0.4,
    alignSelf: 'center',
    marginTop: metrics.screenHeight * 0.1,
  },
  textInput: {
    alignSelf: 'center',
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight * 0.05,
    backgroundColor: colors.whiteTransparent,
    borderRadius: 5,
    marginBottom: metrics.baseMargin,
    paddingLeft: metrics.baseMargin,
  },
  login: {
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight * 0.05,
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
  },
  loginText: {
    color: colors.white,
    fontSize: metrics.screenHeight * 0.02,
    alignSelf: 'center',
  },
  invalid: {
    fontSize: metrics.screenHeight * 0.018,
    color: colors.danger,
  }
});

export default styles;
