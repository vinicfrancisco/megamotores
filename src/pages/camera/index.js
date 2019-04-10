import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../store/ducks/checklist';

class camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            Actions.pop('newDangerZone')
          }}
          style={styles.close} >
          <Icon size={30} color={'white'} name={'close'} />
        </TouchableOpacity>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Icon name={'circle-slice-8'} color={'white'} size={70} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function () {
    if (this.camera) {
      const options = {
        quality: 1
      };
      const data = await this.camera.takePictureAsync(options);
      await this.props.addImage(data);
      await Actions.pop('newDangerZone');
    }
  };
}
const mapStateToProps = state => ({
  checklist: state.checklist,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ChecklistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(camera)
