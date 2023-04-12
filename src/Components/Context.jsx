
import { useState } from "react";
import { createContext } from "react";
export const myGlobalData=createContext();

function CustomProvider({children}){
    const [isLoggedint,setIsLoggedIn]=useState(false);
    const[user,setUser]=useState({
        name:"",
        password:""
    })
    return<myGlobalData.Provider value={{isLoggedint,setIsLoggedIn,user,setUser}}>{children}</myGlobalData.Provider>
}

export default CustomProvider;