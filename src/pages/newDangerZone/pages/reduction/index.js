import React, { Component } from 'react';
import { View, TextInput, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../../../store/ducks/checklist';
import { debounce } from 'lodash';
import { general } from '../../../../styles';
import { Actions } from 'react-native-router-flux';

class reduction extends Component {
  state = {
    reduction: ''
  };
  next = () => {
    this.props.setReduction(this.state);
    Actions.push('finalHrn')
  }
  componentDidMount() {
    this.props.navigation.setParams({
      'onRight': this.next
    })
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Text style={general.subtitle}>Redução de risco</Text>
          <View style={styles.reduction}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              onChangeText={resposta => this.setState({ reduction: resposta })}
              value={this.state.reduction}
              placeholder={"Digite aqui as medidas necessárias"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  checklist: state.checklist,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ChecklistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduction)
