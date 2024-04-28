// src/styles/styles.js
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 5,
  },
  columnsContainer: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spacer: {
    width: 10,
  },
  longItem: {
    width: (screenWidth - 15) / 2,
    height: (screenWidth - 15) / 2 * 16 / 9,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  squareItem: {
    width: (screenWidth - 15) / 2,
    height: (screenWidth - 15) / 2,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '80%',
    padding: 5,
  },
  itemText: {
    color: 'white',
    textAlign: 'left',
  },
});

export default styles;