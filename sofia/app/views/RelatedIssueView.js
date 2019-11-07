/*RelatedIssueView.js*/

import React, { Component } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  View,
  BackHandler

} from "react-native";

import {
  Container,
  Content,
  Header,
  Item,
  Input, 
  Title,
  
} from "native-base";

import { Text, StatusBar } from "react-native";
import { Button, Icon } from "native-base";


import BackHeader from "../components/BackHeader";
import Evaluation from "../components/Evaluation";

import AsyncStorage from '@react-native-community/async-storage';

export default class RelatedIssueView extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      "answer": "",
      "data": null,
      "status_description": "",
      "answer": "",
      "complement": "",
      "attributes": "",
      "permanent_education": "",
      "references": "",
      "sastifaction": 0,
      "attendance": 0,
      "showME": true
    };
  }

  componentDidMount() {
    this.getRelatedIssue();
  }

  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }
  
  /*Obtendo as questões enviadas para a Sofia pelo Token*/
  async getRelatedIssue() {
    const token = await AsyncStorage.getItem("token");
    
    return fetch('http://sofia.huufma.br/api/answer/read/' + this.props.navigation.state.params.item.id, {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.debug("RETURNING...");
      console.debug(responseJson);

      this.setState({
        "answer_id": responseJson.data.answer_id,
        "data": responseJson.data,
        "status_description": responseJson.data.status_description,
        "answer": responseJson.data.answer,
        "complement": responseJson.data.complement,
        "attributes": responseJson.data.attributes,
        "permanent_education": responseJson.data.attributes,
        "references": responseJson.data.references,
        "showME": false
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <Container>
        <Header style={header.background}>
          <StatusBar backgroundColor="#3c8dbc" barStyle="light-content" />
          <View style={header.container}>
            
            <Text style={header.text}>Pergunta Relacionada</Text>
          </View>
        </Header>

        <Content>
          {
            this.state.showME ?
              <Container style={styles.load}>
                <ActivityIndicator size="large" color="#3c8dbc"/>
              </Container>
              :
                
              <View style={styles.container}>

              <Button block warning>
                <Icon name='alert' />
                <Text>Avalie essa resposta no fim da página!</Text>
              </Button>
                
                <Text style={styles.header}>{this.props.navigation.state.params.item.description}</Text>
                <View style={styles.section}>
                  <Text style={styles.title}>Resposta</Text>
                  <Text style={styles.text}>{this.state.answer}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Complemento</Text>
                  <Text style={styles.text}>{this.state.complement}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Atributos</Text>
                  <Text style={styles.text}>{this.state.attributes}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Educação Permanente</Text>
                  <Text style={styles.text}>{this.state.permanent_education}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.title}>Referências</Text>
                  <Text style={styles.text}>{this.state.references}</Text>
                </View>

                <View style={styles.section}>
                  <Evaluation navigation={this.props.navigation} data={this.state.data} judgeType="0" buttonIsVisible={true}/>
                </View>
              </View>
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: '#fafcfd'
  },
  section: {
    padding: 5,
    marginBottom: 10
  },
  header: {
    fontSize: 25,
    fontWeight: '600',
    padding: 5,
    paddingBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.5,
    }
});

const header = StyleSheet.create({
  background: {
    backgroundColor: '#3c8dbc',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#3c8dbc',
    width: 50,
  },

  icon: {
    width: 37,
    color: '#FFF',
    fontSize: 25,
    marginRight: 17,
    marginLeft: 20,
    textAlign: 'center',
  },

  text: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '600',
  },

});

