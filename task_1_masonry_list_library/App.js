import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { data } from './src/data/data';
import { styles } from './src/styles/styles';
import ListElement from './src/components/ListElement';
import { numColumns, spacing } from './src/utils/dimensions';
import MasonryList from '@react-native-seoul/masonry-list';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MasonryList
        style={{ alignSelf: 'stretch' }}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        numColumns={2}
        data={data}
        renderItem={({ item, i }) => (
          <ListElement
            index={i}
            title={item.title}
            image={item.image}
          />
        )}
        keyExtractor={(item, idx) => idx.toString()} // Ensuring each item has a unique key
      />
    </SafeAreaView>
  );
};

export default App;