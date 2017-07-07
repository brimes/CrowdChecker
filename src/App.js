import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

// Scenes
import IdentifyUserScene from './scenes/IdentifyUserScene'
import NewUserScene from './scenes/NewUserScene'
import PasswordScene from './scenes/PasswordScene'
import HomeScene from './scenes/HomeScene'
import LoginScene from './scenes/LoginScene'

// Models
const UserModel = require('./models/UserModel')


const uiTheme = {
    palette: {
      primaryColor: COLOR.indigo500,
    },
    buttonRaised: {
      container: {
        backgroundColor: COLOR.indigo500,
      },
      text: {
        color: '#FFFFFF'
      }
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class CrowdChecker extends Component {
    constructor(props) {
        super(props);
        this.state = { userToken: '' }
    }

    render() {
        var user = new UserModel
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Router>
                    <Scene key="user" hideNavBar={true}>
                        <Scene key="Login"
                          component={LoginScene}
                        />
                        <Scene
                          key="newUser"
                          component={NewUserScene}
                        />
                        <Scene
                          key="password"
                          component={PasswordScene}
                        />
                    </Scene>
                    <Scene key="app" type="reset" hideNavBar={false} initial={!user.isNewUser()}>
                        <Scene
                          key="home"
                          component={HomeScene}
                          title="HOME"
                          initial={true}
                        />
                    </Scene>
                </Router>
            </ThemeProvider>
        );
    }
}
