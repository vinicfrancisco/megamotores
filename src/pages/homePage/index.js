import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

export default class homePage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.recent}>Recentes</Text>

      </SafeAreaView>
    );
  }
}
