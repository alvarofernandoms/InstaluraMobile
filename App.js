import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

export default class App extends Component {
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


  like(idFoto) {
    const foto = this.state.fotos.find(foto => foto.id === idFoto);

    let novaLista = [];

    if (!foto.likeada) {
      novaLista = [
        ...foto.likers,
        {login: 'meuUsuario'}
      ];
    } else {
      novaLista = foto.likers.filter(liker => {
        return liker.login !== 'meuUsuario';
      })
    }
    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    }

    const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)

    this.setState({fotos});
  }

  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <Post foto={item}
            likeCallback={this.like.bind(this)}/>
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
