import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "MobileFlashcards:decks";

export const saveDeckList = deckList => {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deckList));
};

export const fetchDeckList = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(deckList =>
    console.log(JSON.stringify(deckList))
  );
};

// export const updateDecks = deckList => {
//   return AsyncStorage.mergeItem(
//     DECK_STORAGE_KEY,
//     JSON.stringify({
//       deckList
//     })
//   );
// };
