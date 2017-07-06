import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { setTheme, MKTextField, MKColor } from 'react-native-material-kit';
import { Button, COLOR } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';
import ResponsiveImage from 'react-native-responsive-image';

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
    //alignItems: "center",
    justifyContent: "center"
  },
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 32,
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  }
});

const Textfield = MKTextField.textfield()
.withPlaceholder('Text...')
.withStyle(styles.textfield)
.withTextInputStyle({flex: 1})
.build();

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
.withPlaceholder('Number...')
.withStyle(styles.textfieldWithFloatingLabel)
.withTextInputStyle({flex: 1})
.withFloatingLabelFont({
  fontSize: 10,
  fontStyle: 'italic',
  fontWeight: '200',
})
.withKeyboardType('numeric')
.build();


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
        <View style={{flex:1, alignItems:"center", maxHeight: 150}}>
        <ResponsiveImage defaultSource={require('../assets/logo.png')} initWidth="138" initHeight="138"/>
        <Text>
          Esse é o seu primeiro acesso então precisamos saber quem é você.
        </Text>
        </View>
        <View>
          <TextfieldWithFloatingLabel ref="defaultInput"/>
        </View>
        <TextfieldEmail
          placeholder="Digite aqui o seu email"
          autoFocus={true}
          onChangeText={(email) => this.setState({email})}/>
          <Button
            raised
            onPress={() => this.validateEmail()}
            text={this.state.buttonText}
            disabled={this.state.isButtonDisabled}
          />
      </View>
    )
  }
}

export default IdentifyUserScene;
