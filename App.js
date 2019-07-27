import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import Constants from "expo-constants";
import AddDeck from "./components/AddDeck";
import AddQuestion from "./components/AddQuestion";
import Deck from "./components/Deck";
import DeckList from "./components/DeckList";
import Quiz from "./components/Quiz";

function MobileFlashcardStatusBar({ backgroundColor, ...props }) {
  return (
    // <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    //   <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    // </View>
    null
  );
}

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      defaultNavigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      defaultNavigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    defaultNavigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    defaultNavigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    defaultNavigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

const MainNavigatorAppContainer = createAppContainer(MainNavigator);
export default class App extends Component {
  componentDidMount() {
    // setLocalNotification()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      // <Provider store={createStore(reducer)}>
      //   <View style={{ flex: 1 }}>
      //     {/* <MobileFlashcardStatusBar
      //       backgroundColor={purple}
      //       barStyle="light-content"
      //     /> */}
      //     <MainNavigatorAppContainer />
      //   </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
