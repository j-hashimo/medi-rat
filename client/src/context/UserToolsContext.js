import React, { createContext, useReducer } from "react";

const initialState = {
  savedCards: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      return {
        ...state,
        savedCards: state.savedCards.filter(
          (card) => card._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const CardsContext = createContext(initialState);

export const CardsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardsContext.Provider value={{ state, dispatch }}>
      {children}
    </CardsContext.Provider>
  );
};
