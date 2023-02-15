import { CardsContext } from "../context/UserToolsContext";
import { useContext } from "react";

export const useUserToolsContext = () => {
  const context = useContext(CardsContext);

  if (!context) {
    throw Error(
      "useUserToolsContext must be used inside an UserToolsContextProvider"
    );
  }

  return context;
};
