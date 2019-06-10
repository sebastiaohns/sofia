/*DraftIssues.js*/
import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container } from "native-base";

import DraftIssue from "../components/DraftIssue";
import BackHeader from "../components/BackHeader";

export default class DraftIssues extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  render() {
    const draftIssues = this.props.navigation.state.params.draftIssues;

    return (
      <Container>
        <BackHeader navigation={this.props.navigation} name="Rascunho"/>
        <FlatList
          data={draftIssues}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <DraftIssue navigation={this.props.navigation} question={item} />}
        />
      </Container>
    );
  }
}
