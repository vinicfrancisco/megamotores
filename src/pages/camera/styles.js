import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 60,
  },
  close: {
    padding: 15,
    marginTop: 10,
    alignSelf: 'flex-start',

  }
});

export default styles;
