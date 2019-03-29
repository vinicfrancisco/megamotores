import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { general } from '../../../../styles';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ChecklistActions } from '../../../../store/ducks/checklist';

class initialData extends Component {
  state = {
    title: '',
    when: '',
    danger: '',
    damage: '',
    mostFrequence: '',
  }

  next = () => {
    this.props.setInitialData(this.state);
    Actions.push('initialHrn')
  }
  componentDidMount() {
    this.props.navigation.setParams({
      'onRight': this.next
    })
  }

  render() {
    return (
      <ScrollView>
        <Text style={general.subtitle}>Dados iniciais</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <TextInput
              style={styles.textInput}
              value={this.state.title}
              onChangeText={(text) => this.setState({ title: text })}
              placeholder={'Título'} />
          </View>
          <View style={styles.listItem}>
            <TextInput
              style={styles.textInput}
              value={this.state.when}
              onChangeText={(text) => this.setState({ when: text })}
              placeholder={'Quando'} />
          </View>
          <View style={styles.listItem}>
            <TextInput
              style={styles.textInput}
              value={this.state.danger}
              onChangeText={(text) => this.setState({ danger: text })}
              placeholder={'Perigos'} />
          </View>
          <View style={styles.listItem}>
            <TextInput
              style={styles.textInput}
              value={this.state.damage}
              onChangeText={(text) => this.setState({ damage: text })}
              placeholder={'Danos possíveis'} />
          </View>
          <View style={styles.listItem}>
            <TextInput
              style={styles.textInput}
              value={this.state.mostFrequence}
              onChangeText={(text) => this.setState({ mostFrequence: text })}
              placeholder={'Mais prováveis'} />
          </View>
        </View>
        <Text style={general.subtitle}>Fotos</Text>
        <View style={styles.imageList}>
          <FlatList
            horizontal
            keyExtractor={(item) => item.uri.toString()}
            data={this.props.checklist.images}
            renderItem={({ item }) => <Image
              resizeMode={'contain'}
              source={{ uri: item.uri }}
              style={styles.image} />} />
        </View>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => {
            Actions.push('camera')
          }}>
          <Icon name={'camera'} style={{ alignSelf: 'center' }} size={40} />
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  checklist: state.checklist,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ChecklistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(initialData)
