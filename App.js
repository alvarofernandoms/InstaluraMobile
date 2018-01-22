/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

export default class App extends Component<{}> {
  render() {
    const fotos = [
      {id: 1, usuario: 'Álvaro'},
      {id: 2, usuario: 'Fernando'},
      {id: 3, usuario: 'Xablau'}
    ];
    return (
      <FlatList style={{marginTop: 20}}
        data={fotos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image source={require('./resources/img/react-alura.jpg')}
              style={{width: width, height: width}}/>
          </View>
        }
      />
    );
  }
}
