import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class HomeScene extends Component {

	componentDidMount() {

		window.setInterval(() => {
			console.log('interval')
		}, 5000)
		
	    navigator.geolocation.getCurrentPosition(
	      (position) => {
	        var initialPosition = JSON.stringify(position);
	        console.log(initialPosition);
	        //this.setState({initialPosition});
	      },
	      (error) => alert(JSON.stringify(error)),
	      {enableHighAccuracy: false, timeout: 50000}
	    );
  	}

	render () {
	    return (
	        <View>
	        	<Text>Home -1 </Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home</Text>
	        	<Text>Home - 1</Text>
	        </View>
	  	)
	}
}

export default HomeScene