import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';

export default class splashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode={'contain'} style={styles.img} source={require('../../img/logo.jpeg')} />
      </View>
    );
  }
}
