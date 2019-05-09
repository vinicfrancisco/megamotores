import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { metrics, general } from '../../styles';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../store/ducks/checklist';
class newReport extends Component {
  generatePdf = () => {
    /* GERAR PDF a*/
  }
  componentDidMount() {
    this.props.navigation.setParams({
      'onRight': this.generatePdf
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            Actions.push("dangerZones")
          }}
          style={general.miniButton}>
          <Text style={styles.newZoneText}>Zonas de pergio</Text>
          <TouchableOpacity
            style={styles.newButton}
            onPress={() => {
              Actions.push('newDangerZone')
            }}>
            <Icon style={{ marginRight: metrics.baseMargin }} size={30} color={'grey'} name={'plus'} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  checklist: state.checklist,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ChecklistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(newReport);
