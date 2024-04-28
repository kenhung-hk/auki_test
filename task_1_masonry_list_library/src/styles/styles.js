import { StyleSheet } from 'react-native';
import { itemWidth } from '../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 8,
    borderRadius: 10,
    flex: 1,
  },
  tallItem: {
    height: itemWidth * (16 / 9),
  },
  squareItem: {
    height: itemWidth,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
});