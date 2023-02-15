import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }; //user is what we get back from the server when they are logged in
    case "LOGOUT":
      return { user: null };
    default:
      return state; //return original state if no action is taken
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null }); //user is null because we don't have a user logged in at the beginning usually

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); //this parses the json object (in the local storage) into a javascript object (so we can use it)
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    } //this allows us to keep being logged in even after refreshing the page
  }, []);

  console.log("AuthContext state: ", state); //this keeps track of the state in console (useful to know)
  //
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
