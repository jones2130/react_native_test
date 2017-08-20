import React, { Component } from 'react';
import { ActivityIndicator, ListView, StyleSheet, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((res) => res.json())
      .then((data) => {
        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: dataSource.cloneWithRows(data.movies),
        }, function(){

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.item}>{rowData.title}, {rowData.releaseYear}</Text>}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
