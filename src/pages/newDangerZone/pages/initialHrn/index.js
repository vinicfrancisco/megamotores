import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import { general, metrics, colors } from '../../../../styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../../../store/ducks/checklist';
import { Actions } from 'react-native-router-flux';
import RNPickerSelect from 'react-native-picker-select';
import { probability, damage, number, frequence } from '../values';
class initialHrn extends Component {

  state = {
    initialDamage: '',
    initialOcurrence: '',
    initialNumber: '',
    initialFrequence: '',

  };

  callHrn = (hrn) => {
    if (hrn > 0 && hrn <= 1) {
      hrn = 1;
    } else if (hrn > 1 && hrn <= 5) {
      hrn = 2;
    } else if (hrn > 5 && hrn <= 50) {
      hrn = 3;
    } else if (hrn > 50 && hrn <= 100) {
      hrn = 4;
    } else if (hrn > 100 && hrn <= 500) {
      hrn = 5;
    } else if (hrn > 500) {
      hrn = 6
    }

    switch (hrn) {
      case 1:
        return 'Raro';
      case 2:
        return 'Baixo';
      case 3:
        return 'Atenção';
      case 4:
        return 'Significativo';
      case 5:
        return 'Alto';
      case 6:
        return 'Extremo';
      default:
        return 'Aguardando dados'
    }
  }
  next = () => {
    this.props.setInitialHrn(this.state);
    Actions.push('reduction')
  }
  componentDidMount() {
    this.props.navigation.setParams({
      'onRight': this.next
    })
  }
  render() {
    const placeholder1 = {
      label: 'Grau da possível lesão (DPH)',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder2 = {
      label: 'Probabilidade de ocorrência (PO)',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder3 = {
      label: 'Número de pessoas sob o risco (NP)',
      value: null,
      color: '#9EA0A4',
    };
    const placeholder4 = {
      label: 'Frequência da exposição (FE)',
      value: null,
      color: '#9EA0A4',
    };
    const hrn = this.state.initialDamage * this.state.initialOcurrence *
      this.state.initialNumber * this.state.initialFrequence;
    return (
      <ScrollView>
        <Text style={general.subtitle}>HRN inicial</Text>
        <View style={styles.list2}>
          <View style={styles.listItem}>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={placeholder1}
              items={damage}
              onValueChange={(value) => this.setState({ initialDamage: value })}
            />
          </View>
          <View style={styles.listItem}>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={placeholder2}
              items={probability}
              onValueChange={(value) => this.setState({ initialOcurrence: value })}
            />
          </View>
          <View style={styles.listItem}>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={placeholder3}
              items={number}
              onValueChange={(value) => this.setState({ initialNumber: value })}
            />
          </View>
          <View style={styles.listItem}>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={placeholder4}
              items={frequence}
              onValueChange={(value) => this.setState({ initialFrequence: value })}
            />
          </View>
        </View>
        <View style={styles.hrn}>
          <View style={styles.hrnItem}>
            <Text style={styles.hrnText}>HRN</Text>
            <Text style={styles.hrnText}>{hrn}</Text>
          </View>
          <View style={styles.hrnItem}>
            <Text style={styles.hrnText}>Criticidade</Text>
            <Text style={styles.hrnText}>{this.callHrn(hrn)}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  checklist: state.checklist,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ChecklistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(initialHrn)


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: metrics.baseMargin,
    fontSize: metrics.screenHeight * 0.024,
    color: colors.darkTransparent,
  },
  inputAndroid: {
    marginLeft: metrics.baseMargin,
    fontSize: metrics.screenHeight * 0.024,
    color: colors.darkTransparent,
  },
});
