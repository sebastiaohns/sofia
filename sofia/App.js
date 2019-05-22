import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from "./app/components/Login";
import HomeScreen from "./app/components/HomeScreen";
<<<<<<< HEAD
import Test from "./app/components/Test";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

=======
import NewQuestion from "./app/components/NewQuestion";
>>>>>>> developer

class Home extends Component<{}> {

  constructor() {
    super();

    logging = "false";
  }

  componentDidMount() {
    logging: this.retrieveData();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#3c8dbc",
      elevation: null
    },
    header: null
  };

  async retrieveData() {
    const value = await AsyncStorage.getItem('logging');

    return value
  };

  render() {

<<<<<<< HEAD
    if(logging == "true") {
=======
    if(logging == "false") {
>>>>>>> developer
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#3c8dbc" />
          <Login navigation={this.props.navigation} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#3c8dbc" />
          <HomeScreen navigation={this.props.navigation} />
        </View>
      );
    }
  }
}

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
        title: "HomeScreen"
      },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
<<<<<<< HEAD
=======
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "NewQuestion"
    }
  },
>>>>>>> developer
});

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
