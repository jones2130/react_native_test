import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  handlePressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this.handlePressButton} title='Press Me' />
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={this.handlePressButton} title='Press Me' color='#841584' />
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this.handlePressButton} title='This looks great!' />
          <Button onPress={this.handlePressButton} title='OK!' color='#841584' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
