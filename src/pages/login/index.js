import React, { Component } from 'react';

import {
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import { Actions } from 'react-native-router-flux';

export default class login extends Component {
  state = {
    username: '',
    password: '',
  };

  login = async () => {
    if (this.state.username == 'Megamotores' && this.state.password == 'demolay') {
      await AsyncStorage.setItem('megamotores@login', '1');
      await Actions.reset('homepage')

    } else {
      return <Text style={styles.invalid} >Usuário inválido</Text>
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode={'contain'}
          source={require('../../img/logo.jpeg')} />
        <TextInput
          placeholder={'Usuário'}
          placeholderTextColor={colors.white}
          value={this.state.username}
          onSubmitEditing={() => { this.password.focus() }}
          onChangeText={(username) => { this.setState({ username: username }) }}
          style={styles.textInput} />
        <TextInput
          placeholder={'Senha'}
          ref={(input) => { this.password = input; }}
          secureTextEntry
          value={this.state.password}
          onChangeText={(password) => { this.setState({ password: password }) }}
          placeholderTextColor={colors.white}
          style={styles.textInput} />
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.login()
          }} >
          <Text style={styles.loginText}>ENTRAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
