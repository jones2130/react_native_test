import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bananas from './testviews/bananas/Bananas';
import BlinkApp from './testviews/statetest/BlinkApp';
import ButtonBasics from './testviews/touchInput/ButtonBasics';
import FlatListBasics from './testviews/listView/FlatListBasics';
import FixedDimensionsBasics from './testviews/dimensions/FixedDimensionsBasics';
import FlexDimensionsBasics from './testviews/dimensions/FlexDimensionsBasics';
import HelloWorldApp from './testviews/helloworld/HelloWorldApp';
import LotsOfStyles from './testviews/style/LotsOfStyles';
import ManyGreetings from './testviews/greetings/ManyGreetings';
import Movies from './testviews/networking/Movies';
import PizzaTranslator from './testviews/textInput/PizzaTranslator';
import ScrollableView from './testviews/scrollView/ScrollableView';
import SectionListBasics from './testviews/listView/SectionListBasics';
import Touchables from './testviews/touchInput/Touchables';

export default class App extends React.Component {
  render() {
    return (
        <Movies></Movies>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
});
