import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageView } from 'native-image-view';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageView style={styles.image} imageUrl="https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
   height: 200,
  },
});