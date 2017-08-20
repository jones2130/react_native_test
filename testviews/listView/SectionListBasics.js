import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  data = [
    {title: 'D', data: [{key: 'Devin'}]},
    {title: 'J', data: [{key: 'Jackson'}, {key: 'James'}, {key: 'Jillian'}, {key: 'Jimmy'}, {key: 'Joel'}, {key: 'John'}, {key: 'Julie'}]},
  ];

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1,
    marginTop: -1,
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
