// src/components/Item.js
import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/styles';

const Item = ({ item, style }) => (
  <View style={style}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  </View>
);

export default Item;