import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 5,
    width: metrics.screenWidth * 0.95,
    alignSelf: 'center',
    marginTop: 15,
    paddingVertical: 15,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
    marginLeft: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: metrics.screenHeight * 0.026,
    marginLeft: metrics.baseMargin,
    alignSelf: 'flex-start',
    width: metrics.screenWidth * 0.7,
  },
});

export default styles;
