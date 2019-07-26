export const SET_DECK_LIST = "SET_DECK_LIST";
export const NEW_DECK = "NEW_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const NEW_QUESTION_ANSWER = "NEW_QUESTION_ANSWER";

export const setDeckList = deckList => ({
  type: SET_DECK_LIST,
  deckList
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
