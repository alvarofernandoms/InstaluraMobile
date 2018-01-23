import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

export default class App extends Component<{}> {
  render() {
    const fotos = [
      {id: 1, usuario: 'Álvaro'},
      {id: 2, usuario: 'Fernando'},
      {id: 3, usuario: 'Xablau'}
    ];
    return (
      <FlatList style={styles.container}
        data={fotos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <Post foto={item}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
})
