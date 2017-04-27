import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  AppRegistry,
  DrawerLayoutAndroid,
  TextInput,
  PixelRatio,
  Text,
  View
} from 'react-native';

import UserTypeScreen from './screens/UserTypeScreen'

//import {
//  MKTextField,
//  MKColor,
//  mdl,
//} from 'react-native-material-kit';

export default class Th extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  
  render() {
    return (
      <UserTypeScreen/>
    );
  }
}


