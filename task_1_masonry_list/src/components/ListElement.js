import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles, itemWidth } from '../styles/styles';
import { numColumns, spacing } from '../utils/dimensions';

const ListElement = ({ title, index, image }) => {

  const column = index % numColumns;
  const row = Math.floor(index / numColumns);

  // Calculate whether the item should be tall or square
  // Pattern starts based on the column index and alternates every row
  const isTall = (column % 2 === 0) ? (row % 2 === 0) : (row % 2 !== 0);
  return (
    <ImageBackground
      source={{ uri: image }} 
      style={[
        styles.item,
        { width: itemWidth},
        isTall ? styles.tallItem : styles.squareItem, 
        column === 0 ? { marginRight: spacing / 2 } : { marginLeft: spacing / 2 },
        {
          borderRadius: 10, 
          overflow: 'hidden'
        }
      ]}
      resizeMode="cover" 
    >
      <View style={[styles.titleContainer, { maxWidth: 100 }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default ListElement;