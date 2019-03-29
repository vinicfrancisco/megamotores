import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles'
const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.95,
    height: metrics.screenHeight * 0.3,
    marginTop: metrics.basePadding,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  imageList: {
    padding: 5,
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: metrics.screenWidth * 0.95,
    height: metrics.screenHeight * 0.2,
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
  camera: {
    borderRadius: 70,
    elevation: 5,
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginTop: metrics.screenHeight * 0.12,
    justifyContent: 'center',
  },
  image: {
    width: metrics.screenWidth * 0.3,
    height: metrics.screenHeight * 0.4,
    marginLeft: metrics.basePadding / 2,
    alignSelf: 'center'
  }
});

export default styles;
