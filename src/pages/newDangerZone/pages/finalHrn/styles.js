import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';
const styles = StyleSheet.create({
  list2: {
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.95,
    height: metrics.screenHeight * 0.24,
    marginTop: metrics.basePadding,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  listItem: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    width: metrics.screenWidth * 0.95,
    height: metrics.screenHeight * 0.06,

  },
  textInput: {
    fontSize: metrics.screenHeight * 0.024,
    marginLeft: metrics.baseMargin,
    width: metrics.screenWidth * 0.95,
  },
  hrn: {
    width: metrics.screenWidth * 0.75,
    height: metrics.screenHeight * 0.2,
    marginTop: metrics.basePadding * 2,
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  hrnItem: {
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    height: metrics.screenHeight * 0.1,
    flexDirection: 'row'
  },
  hrnText: {
    alignSelf: 'center',
    fontSize: metrics.screenHeight * 0.022,
    padding: metrics.baseMargin / 2,
  }
});

export default styles;
