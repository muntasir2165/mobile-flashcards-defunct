import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { white, gray } from "../utils/colors";
import { AppLoading } from "expo";
import { setDeckList, newDeck } from "../actions";
import { saveDeckList, fetchDeckList } from "../utils/api";
import { defaultDeckList } from "../utils/defaultDeckList";

class DeckList extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    fetchDeckList()
      .then(deckList => {
        if (JSON.stringify(deckList) === "{}") {
          saveDeckList(defaultDeckList).then(newDeckList =>
            this.props.dispatch(setDeckList(JSON.parse(newDeckList)))
          );
        }
        this.props.dispatch(setDeckList(JSON.parse(deckList)));
      })
      .then(() => this.setState(() => ({ ready: true })));
  }

  render() {
    if (this.state.ready === false) {
      return <AppLoading />;
    }

    return (
      <View>
        {Object.entries(this.props.deckList).map((deckTitle, deckInfo) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Deck',
            { deckTitle: deckTitle }
          )}>
            <Text style={{ fontSize: 20 }}>{deckTitle}</Text>
            <Text style={{ fontSize: 16, color: gray }}>
              {`${deckInfo.questions.length} cards`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: white,
//     borderRadius: 2,
//     padding: 20,
//     marginLeft: 10,
//     marginRight: 10,
//     marginTop: 17,
//     justifyContent: "center",
//     shadowRadius: 3,
//     shadowOpacity: 0.8,
//     shadowColor: "rgba(0, 0, 0, 0.24)",
//     shadowOffset: {
//       width: 0,
//       height: 3
//     }
//   },
//   noDataText: {
//     fontSize: 20,
//     paddingTop: 20,
//     paddingBottom: 20
//   }
// });

function mapStateToProps(deckList) {
  return {
    deckList
  };
}

export default connect(mapStateToProps)(DeckList);
