import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ZoneItem from './components/zoneItem';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../store/ducks/checklist';
class dangerZones extends Component {
  render() {
    console.tron.log(this.props.checklist.dangerZones)
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.checklist.dangerZones}
          renderItem={({ item }) => <ZoneItem zone={item} />}
        />
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

