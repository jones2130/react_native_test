import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  handlePressButton() {
    Alert.alert('You tapped the button!');
  }

  handleLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handlePressButton} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.handlePressButton} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback onPress={this.handlePressButton} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback onPress={this.handlePressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight onPress={this.handlePressButton} onLongPress={this.handleLongPressButton} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white',
  }
});
