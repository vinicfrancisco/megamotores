import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 375,
    alignSelf: 'center',
  },
});

export default styles;
