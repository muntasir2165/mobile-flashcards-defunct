import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { white } from "../utils/colors";
import { AppLoading } from "expo";
import { addEntry } from '../actions'

class DeckList extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    const { dispatch } = this.props;

    fetchCalendarResults()
      .then(entries => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(
            addEntry({
              [timeToString()]: getDailyReminderValue()
            })
          );
        }
      })
      .then(() => this.setState(() => ({ ready: true })));
  }
  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View style={styles.item}>
      {today ? (
        <View>
          <DateHeader date={formattedDate} />
          <Text style={styles.noDataText}>{today}</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("EntryDetail", { entryId: key })
          }
        >
          <MetricCard date={formattedDate} metrics={metrics} />
        </TouchableOpacity>
      )}
    </View>
  );

  render() {
    const { entries } = this.props;
    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />;
    }

    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
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
