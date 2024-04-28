import { Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');
export const numColumns = 2;
export const spacing = 15;
export const itemWidth = (width - spacing * (numColumns + 1)) / numColumns;