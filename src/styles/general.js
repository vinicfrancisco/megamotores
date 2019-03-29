import { StyleSheet } from 'react-native';
import { colors, metrics } from './index';
const general = StyleSheet.create({
  miniButton: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.95,
    height: metrics.screenHeight * 0.06,
    marginTop: metrics.basePadding,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    elevation: 5,
  },
  subtitle: {
    fontSize: metrics.screenHeight * 0.032,
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
  },
});

export default general;
