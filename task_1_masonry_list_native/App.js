// src/components/App.js
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { data } from './src/data/data';
import Item from './src/components/Item';
import styles from './src/styles/styles';

const App = () => {
  const columnOne = data.filter((_, index) => index % 2 === 0);
  const columnTwo = data.filter((_, index) => index % 2 !== 0);

  const renderItem = (item, index, columnType) => {
    let style = (columnType === 'columnOne')
      ? (index % 2 === 0 ? styles.longItem : styles.squareItem)
      : (index % 2 !== 0 ? styles.longItem : styles.squareItem);
    
    return <Item item={item} style={style} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            {columnOne.map((item, index) => renderItem(item, index, 'columnOne'))}
          </View>
          <View style={styles.spacer} />
          <View style={styles.column}>
            {columnTwo.map((item, index) => renderItem(item, index, 'columnTwo'))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;