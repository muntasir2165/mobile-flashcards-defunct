import {
  SET_DECK_LISTING,
  NEW_DECK,
  DELETE_DECK,
  NEW_QUESTION_ANSWER
} from "../actions";

const defaultState = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

function decks(state = defaultState, action) {
  switch (action.type) {
    case SET_DECK_LISTING:
      return {
        ...state,
        ...action.deckListing
      };

    case NEW_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] }
      };
    case DELETE_DECK:
      const currentDeck = { ...state };
      currentDeck[action.title] = undefined;
      delete currentDeck[action.title];
      return {
        ...currentDeck
      };
    case NEW_QUESTION_ANSWER:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [
            ...state[action.title].questions,
            { question: action.question, answer: action.answer }
          ]
        }
      };
    default:
      return state;
  }
}

export default entries;
