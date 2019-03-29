import { StyleSheet } from 'react-native';
import {colors, metrics} from '../../styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther,
  },
  newZoneText: {
    fontSize: metrics.screenHeight * 0.022,
    marginLeft: metrics.baseMargin,
  }
});

export default styles;
