import { useState } from "react";
import { useAuthContext } from "./useAuthContext"; // this returns the user property and the dispatch function, which we need

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null); // the loading state is used to make sure that the user doesn't click the button multiple times while the data is being sent to the server and that the user can't click the submit button when the form is incomplete
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null); // this resets the error in case there was an error before which was specifically for the initial signup function

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, //type of data we send
      body: JSON.stringify({ email, password }), //the data we send, which is the email and password in json format
    }); // note: The fetch function can also be used to send data to the server, for example by using the POST method. The fetch function returns a promise, which is why we use the await keyword. The await keyword makes the function wait until the promise is settled and returns its result. The response object contains the response from the server, which we can use to check if the request was successful or not. The response.ok property is true if the response status is 200-299. If the response is not ok, we set the error to the error message from the json data and stop the loading state. If the response is ok, we save the user to local storage, update the auth context, and update the loading state.
    const json = await response.json(); //this gives us the json data from the response

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } //if the response is not ok, then we set the error to the error message from the json data and stop the loading state
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json)); //this json object has the json web token and the email property

      // update the auth context
      dispatch({ type: "LOGIN", payload: json }); //Note: the point of the dispatch method is it sends the type of action to the reducer function to perform its job, which, of course, is updating the state.

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
