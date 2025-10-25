import React, { Children, createContext, useContext } from "react";

const AppContext = createContext();

 export const Provider = ({children}) => {
  const name = "ajharul islam";
  const age = 22;

  const value = {
    name,
    age,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);



// how to use it in another components

const {name, age } = useAppContext();