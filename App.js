import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('http://10.0.2.2:8080/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}));
  }

  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <Post foto={item}/>
        }
      />
    );
  }
}

const marginByPlatform = Platform.OS === 'ios' ? 20 : 10;
const styles = StyleSheet.create({
  container: {
    marginTop: marginByPlatform
  }
})
