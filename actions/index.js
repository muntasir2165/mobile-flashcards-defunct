export const SET_DECK_LISTING = "SET_DECK_LISTING";
export const NEW_DECK = "NEW_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const NEW_QUESTION_ANSWER = "NEW_QUESTION_ANSWER";

export const setDeckListing = deckListing => ({
  type: SET_DECK_LISTING,
  deckListing
});

export const newDeck = title => ({
  type: NEW_DECK,
  title
});

export const deleteDeck = title => ({
  type: NEW_DECK,
  title
});

export const newQuestionAnswer = (title, question, answer) => ({
  type: NEW_QUESTION_ANSWER,
  title,
  question,
  answer
});
