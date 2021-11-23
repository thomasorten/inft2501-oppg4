import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

const Detail = ({item}) => {

  useEffect(() => {}, []);

  return (
    <View
      style={styles.container}>
        <Text style={{fontSize: 24}}>{item.title}</Text>
        <Image
            style={{width: 150, height: 150}}
            source={{
                uri: item.image,
            }} />
        <Text style={{fontSize: 14}}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 22,
   alignSelf: 'center',
   alignItems: 'center',
   alignContent: 'center'
  },
});

export default Detail;