import React, { createContext, useContext } from "react";

export const userContext = createContext();

export const UserProvider = ({children})=>{

    const name = 'ajharul'
    const sex = 'male'
    const age = 22

    const data = {
        name,
        age,
        sex
    }
    return(
        <userContext.Provider
        value={data}
        >{children}</userContext.Provider>
    )
}

export const useAppContext = ()=> useContext(userContext)