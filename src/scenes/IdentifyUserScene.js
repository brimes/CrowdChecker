import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { setTheme, MKTextField, MKColor } from 'react-native-material-kit';
import { Button, COLOR } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';

// Models
const UserModel = require('../models/UserModel')

setTheme({
  primaryColor: MKColor.Indigo,
  primaryColorRGB: MKColor.RGBIndigo,
  accentColor: MKColor.Amber,
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  title: {
    fontSize: 32,
    margin: 10
  },
  information: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 10,
    marginBottom: 20
  },
  textfield: {
    width: 300,
    marginBottom: 20
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 24
  },
});

const TextfieldEmail = MKTextField.textfieldWithFloatingLabel()
  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .withStyle(styles.textfield)
  .withKeyboardType('email-address')
  .build();

class IdentifyUserScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      buttonText: 'Continuar',
      isButtonDisabled: false
    };
  }

  validateEmail() {
    let user = new UserModel
    user.email = this.state.email
    this.setState({buttonText: "Aguarde...", isButtonDisabled: true})

    user.validateByEmail().then((isValid) => {
      this.setState({buttonText: "Continuar", isButtonDisabled: false})
      if (!isValid) {
        Actions.newUser({ email: this.state.email });
        return ;
      }
      Actions.password({ email: this.state.email });
    });
  }

  chage() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Image source={require('../../assets/logo.png')} />
        </Text>
        <Text style={styles.information}>
          Esse é o seu primeiro acesso então precisamos saber quem é você.
        </Text>
        <TextfieldEmail 
          placeholder="Digite aqui o seu email"
          autoFocus={true}
          onChangeText={(email) => this.setState({email})}/>
        <View style={styles.button}>
          <Button
            raised
            onPress={() => this.validateEmail()}
            text={this.state.buttonText}
            disabled={this.state.isButtonDisabled}
          />
        </View>
      </View>
    )
  }
}

export default IdentifyUserScene;