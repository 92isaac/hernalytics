import { createContext, useRef } from "react";


export const AppContext = createContext(null)

export const AppProvider =({children})=>{
    const dropdownRef = useRef(null);

    const globalData={
        dropdownRef
    }


    return <AppContext.Provider value={globalData}>
    {children}
      </AppContext.Provider>
}