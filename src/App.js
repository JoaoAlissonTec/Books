import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Authors from './Pages/Authors';
import Author from './Pages/Author';
import authors from './Data/authors';
import Books from './Pages/Books';
import Book from './Pages/Book';
import books from './Data/books';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="Container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/autores' element={<Authors authors={authors} books={books}/>}/>
            <Route path='/autor' element={<Author authors={authors} books={books}/>}/>
            <Route path='/livros' element={<Books authors={authors} books={books}/>}/>
            <Route path='/livro' element={<Book authors={authors} books={books}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
