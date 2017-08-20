import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  data = [
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ];

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.data} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginTop: -1,
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
