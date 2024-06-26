import React, {createContext, useState} from "react";
import api from "../Services/api";

const Context = createContext();

function AuthProvider({children}){

    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(){

        const {data} = await api.post("/login", {
            "email":"joaoalisson222005@gmail.com",
            "password":"13242526Ab!"
        });

        setAuthenticated(true)
    }

    return <Context.Provider value={{authenticated, handleLogin}}>
        {children}
    </Context.Provider>
}

export {Context, AuthProvider}