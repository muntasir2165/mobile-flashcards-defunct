import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { gray } from "../utils/colors";
import { connect } from "react-redux";

class Quiz extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Quiz</Text>
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

const mapStateToProps = deckList => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
