import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

const List = ({onClick, data}) => {

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Button style={{height: 80}} title={item.title} onPress={(e) => { 
          e.persist();
          onClick(item.id);
        }
      } />
    </View>
  );

  useEffect(() => {}, []);

  return (
    <View
      style={styles.container}>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 22,
  },
  item: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '90%',
  },
});

export default List;