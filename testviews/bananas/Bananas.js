import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    let picStyle = {
      width: 193,
      height: 110
    };
    return (
      <Image source={pic} style={picStyle} />
    );
  }
}

// AppRegistry.registerComponent('reactNativeTest', () => Bananas);
