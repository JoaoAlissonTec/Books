import './App.css';
import RoutesApp from './Routes';
import {AuthProvider} from './Context/AuthContext'
import { useEffect, useState } from 'react';
import api from './Services/api';

function App() {

  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(()=>{
    api.get("/books").then(({data})=>setBooks(data))
    api.get("/autores").then(({data})=>setAuthors(data))
  }, []);
  
  return (
    <AuthProvider>
      <div className="App">
        <RoutesApp authors={authors} books={books}/>
      </div>
    </AuthProvider>
  );
}

export default App;
