import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../store/ducks/checklist';
class dangerZones extends Component {
  render() {
    console.tron.log(this.props.checklist)
    return (
      <View style={styles.container}>

      </View>
    );
  }
}
const mapStateToProps = state => ({
  checklist: state.checklist,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ChecklistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(dangerZones)

