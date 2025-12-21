import { createContext, useState } from "react";
export const TheamContext= createContext();

export const TheamProvider= ({children})=>{
    const [theam, setTheam]=useState("light");
     const toogleTheam=()=>{
        setTheam(prev=>(prev === "light"? "dark":"light"));
     }; 
     return(
        <TheamContext.Provider value={{theam, toogleTheam}}>
            {children}
        </TheamContext.Provider>
     )
}