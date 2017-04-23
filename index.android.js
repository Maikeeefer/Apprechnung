/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class apprechnung extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Murphys Apprechnung!
        </Text>
        <Button style={styles.instructions} title={"Starte"} onPress={this.startApplication} />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }

    startApplication() {
        alert("I am a really nice app!");
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5eff71',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('apprechnung', () => apprechnung);
