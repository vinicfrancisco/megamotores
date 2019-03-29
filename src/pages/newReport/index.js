import React, { Component } from 'react';
import { View, Text , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { metrics, general } from '../../styles';
import { Actions } from 'react-native-router-flux';

export default class newReport extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=> {
          Actions.push("dangerZones")
        }}
        style={general.miniButton}>
          <Text style={styles.newZoneText}>Zonas de pergio</Text>
          <TouchableOpacity
          style={styles.newButton}
          onPress={()=>{
            Actions.push('newDangerZone')
          }}>
            <Icon style={{marginRight: metrics.baseMargin}} size={30} color={'grey'} name={'plus'}/>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}
