import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import {setTheme, MKTextField, MKColor} from 'react-native-material-kit';
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
        borderWidth: 0,
        alignSelf: 'flex-end',
        marginRight: 24,
    },
});

const Textfield = MKTextField.textfieldWithFloatingLabel()
.withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
})
.withStyle(styles.textfield).build();

const TextfieldPassword = MKTextField.textfieldWithFloatingLabel()
.withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
})
.withPassword(true)
.withStyle(styles.textfield).build();


class NewUserScene extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email : this.props.email,
            name : null,
            password : null,
            bank : null,
            account : null,
            agency : null,
            buttonText: 'Continuar',
            isButtonDisabled: false
        };
    }

    saveNewUser() {
        this.setState({buttonText: "Aguarde...", isButtonDisabled: true})

        let user = new UserModel
        user.email = this.state.email
        user.name = this.state.name
        user.password = this.state.password
        user.bank = this.state.bank
        user.agency = this.state.agency
        user.account = this.state.account
        user.save().then((result) => {
            this.setState({buttonText: "Continuar", isButtonDisabled: false})
            Actions.app();
        })
    }

    render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.information}>
                    Para continuar, preciamos de mais algunas informações.
                </Text>
                <Textfield 
                  placeholder="Qual é o seu nome?"
                  autoFocus={true}
                  onChangeText={(name) => this.setState({name})}/>
                <TextfieldPassword 
                  placeholder="Coloque aqui uma senha"
                  onChangeText={(password) => this.setState({password})}/>
                <Textfield 
                  placeholder="Voce tem conta em qual banco?"
                  onChangeText={(bank) => this.setState({bank})}/>
                <Textfield 
                  placeholder="Qual o númedo da sua agência?"
                  onChangeText={(agency) => this.setState({agency})}/>
                <Textfield 
                  placeholder="Qual o número da sua conta?"
                  onChangeText={(account) => this.setState({account})}/>
            </View>
            <View style={styles.button}>
                <Button
                raised
                onPress={() => this.saveNewUser()}
                text={this.state.buttonText}
                disabled={this.state.isButtonDisabled}
                />
            </View>
        </ScrollView>
        )
    }
}



export default NewUserScene;