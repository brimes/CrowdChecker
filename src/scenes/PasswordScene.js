import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const TextfieldPassword = MKTextField.textfieldWithFloatingLabel()
.withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
})
.withPassword(true)
.withStyle(styles.textfield).build();

class IdentifyUserScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : this.props.email,
            password: '',
            buttonText: 'Continuar',
            isButtonDisabled: false
        };
    }

    validatePassword() {
        let user = new UserModel
        user.email = this.state.email
        user.password = this.state.email
        this.setState({buttonText: "Aguarde...", isButtonDisabled: true})

        user.authenticate((isValid) => {
            this.setState({buttonText: "Continuar", isButtonDisabled: false})
            if (!isValid) {
                Actions.newUser({ email: this.state.email });
                return ;
            }
            Actions.app();
        })
    }

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.information}>
                  Informe a sua senha para continar
              </Text>
              <TextfieldPassword 
                  placeholder="Digite aqui a sua senha"
                  autoFocus={true}
                  onChangeText={(password) => this.setState({password})}/>
              <View style={styles.button}>
              <Button
                  raised
                  onPress={() => this.validatePassword()}
                  text={this.state.buttonText}
                  disabled={this.state.isButtonDisabled}
              />
              </View>
          </View>
          )
    }
}

export default IdentifyUserScene;