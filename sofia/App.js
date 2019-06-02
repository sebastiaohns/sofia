import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from "./app/components/Login";
import HomeScreen from "./app/components/HomeScreen";
import SubmittedIssues from "./app/components/SubmittedIssues";
import DraftIssues from "./app/components/DraftIssues";
import CanceledIssues from "./app/components/CanceledIssues";
import AnsweredIssues from "./app/components/AnsweredIssues";
import NewQuestion from "./app/components/NewQuestion";
import Overlay from "./app/components/Overlay";
import Question from "./app/components/Question";
import FAQ from "./app/components/FAQ";

class Home extends Component<{}> {

  state = {
    logging: "false"
  };

  constructor() {
    super();

  }

  componentDidMount() {
    this.retrieveData()

  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  async retrieveData() {
    const value = await AsyncStorage.getItem('logging');
    const email = await AsyncStorage.getItem('email');

    console.debug(value);

    this.setState({
      logging: value
    })
  };

  render() {

    if(this.state.logging == "true") {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#3c8dbc" />
          <HomeScreen navigation={this.props.navigation} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#3c8dbc" />
          <Login navigation={this.props.navigation} />
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

  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "NewQuestion"
    }
  },

  Question: {
    screen: Question,
    navigationOptions: {
      title: "Question"
    }
  },

  FAQ: {
    screen: FAQ,
    navigationOptions: {
      title: "FAQ"
    }
  },

  DraftIssues: {
    screen: DraftIssues,
    navigationOptions: {
      title: "DraftIssues"
    }
  },

  CanceledIssues: {
    screen: CanceledIssues,
    navigationOptions: {
      title: "CanceledIssues"
    }
  },

  AnsweredIssues: {
    screen: AnsweredIssues,
    navigationOptions: {
      title: "AnsweredIssues"
    }
  },

  SubmittedIssues: {
    screen: SubmittedIssues,
    navigationOptions: {
      title: "SubmittedIssues"
    }
  },

  Overlay: {
    screen: Overlay,
    navigationOptions: {
      title: "Overlay"
    }
  },
});

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
