import { useAuthContext } from "./useAuthContext";
import { useUserToolsContext } from "./useUserToolsContext";
// to logout, we need to 1) update the global state, and 2) get rid of the json web token in local storage
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: userToolsDispatch } = useUserToolsContext(); //by using : workoutsDispatch, we can import 2 dispatch functions and be able to distinguish between them

  const logout = () => {
    // remove the user from local storage
    localStorage.removeItem("user"); // this removes the user

    // dispatch logout action (from global state)
    dispatch({ type: "LOGOUT" }); //removes the user (in authcontext, it sets user to null)
    userToolsDispatch({ type: "SET_WORKOUTS", payload: null }); //removes payload of the workouts of the user. This clears the global state of the workouts
  };

  return { logout };
};
