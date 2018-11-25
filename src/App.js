import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyDPUBm77TqUr1TL75pw3woQUxiXf14W-qY",
	    authDomain: "auth-4df6b.firebaseapp.com",
	    databaseURL: "https://auth-4df6b.firebaseio.com",
	    projectId: "auth-4df6b",
	    storageBucket: "auth-4df6b.appspot.com",
	    messagingSenderId: "852243151490"
	  });
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
