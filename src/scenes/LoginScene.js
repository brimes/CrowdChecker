/**
* @author Charley Oliveira <charleycesar@gmail.com>
* Classe responsavel por autenticar o usuario
*/

import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Auth0 from 'react-native-auth0';

const Autenticar = new Auth0({ domain: 'charleycesar.auth0.com', clientId: 'sUgUjz4Wb4AYdUgKU4fPeS74YTH6vNg3' });

export default class LoginScene extends Component {

  _onLogin() {
    Autenticar
        .webAuth
        .authorize({scope: 'openid email'})
        .then(credentials =>  Alert.alert(
                  'Success',
                  'AccessToken: ' + credentials.accessToken,
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                ))
        .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          CrowdChecker
        </Text>
        <Button onPress={this._onLogin} title="Entrar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
