import React, {createContext, useEffect, useState} from "react";
import api from "../Services/api";

const Context = createContext();

function DataProvider({children}){

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        api.get("/books").then(({data})=>setBooks(data))
        api.get("/autores").then(({data})=>setAuthors(data))
    }, []);

    return <Context.Provider value={{books, setBooks, authors, setAuthors}}>
        {children}
    </Context.Provider>
}

export {Context, DataProvider}