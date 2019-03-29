import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther,
  },
  reduction: {
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.95,
    height: metrics.screenHeight * 0.5,
    marginTop: metrics.basePadding,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  textInput: {
    fontSize: metrics.screenHeight * 0.024,
    marginLeft: metrics.baseMargin,
    width: metrics.screenWidth * 0.95,
  },
});

export default styles;
