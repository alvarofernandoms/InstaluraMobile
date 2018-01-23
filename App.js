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
      <FlatList style={styles.container}
        data={fotos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <View>
            <View style={styles.cabecalho}>
              <Image source={require('./resources/img/react-alura.jpg')}
                style={styles.fotoDePerfil}/>
              <Text>{item.usuario}</Text>
            </View>
            <Image source={require('./resources/img/react-alura.jpg')}
              style={styles.foto}/>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width
  }
})
