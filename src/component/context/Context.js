import { createContext, useContext, useRef, useState } from "react";


export const AppContext = createContext(null)

export const AppProvider =({children})=>{
    const dropdownRef = useRef(null);
    const [ selected, setSelected ] = useState({header:"Pre-Election", date:'<span className="text-yellow-400 uppercase">UPDATED MAR. 15, 2021, 9:43 A.M EDT</span>'})

    const globalData={
        dropdownRef, 
        selected, 
        setSelected,
    }


    return <AppContext.Provider value={globalData}>
    {children}
      </AppContext.Provider>
}

export const useContextGloball=()=>{
    return useContext(AppContext)
}