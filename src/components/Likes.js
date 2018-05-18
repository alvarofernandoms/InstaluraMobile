import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class InputComentario extends Component {

  carregaIcone(likeada) {
    return likeada ? require('../../resources/img/s2-checked.png') :
      require('../../resources/img/s2.png')
  }

  exibeLikes(likers) {
    if (likers.length <= 0) return;

    return (
      <Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>
    )
  }

  render() {
    const { foto, likesCallback } = this.props;
    return(
      <View>
        <TouchableOpacity onPress={likesCallback}>
          <Image style={styles.botaoDeLike}
            source={this.carregaIcone(foto.likeada)}/>
        </TouchableOpacity>
        {this.exibeLikes(foto.likers)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botaoDeLike: {
    marginBottom: 10,
    height: 40,
    width: 40
  },
  likes: {
    fontWeight: 'bold'
  },
})