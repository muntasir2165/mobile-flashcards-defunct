import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { gray } from "../utils/colors";
import { connect } from 'react-redux'

export default class Deck extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>{this.props.deckTitle}</Text>
        <Text style={{ fontSize: 16, color: gray }}>
          {`${this.props.deckInfo.questions.length} cards`}
        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   metric: {
//     flexDirection: 'row',
//     marginTop: 12
//   },
// })

const mapStateToProps =(deckList, { navigation }) => {
  const { deckTitle } = navigation.state.params

  return {
    deckTitle,
    deckInfo: deckList[deckTitle],
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deck)