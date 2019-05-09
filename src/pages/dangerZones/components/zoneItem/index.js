import React from 'react';
import { TouchableOpacity, Text, Image, List } from 'react-native';
import styles from './styles';

const ZoneItem = ({ zone }) => {
  const newZone = zone.initialData;
  console.tron.log({ images: newZone.images })

  return (
    <TouchableOpacity
      onPress={() => { }}
      style={styles.container}>
      <Image style={styles.image} resizeMode={'contain'} source={{ uri: newZone.images[0].uri }} />

      <Text style={styles.title}>{newZone.title}</Text>
    </TouchableOpacity>
  );
}

export default ZoneItem;
