import React from "react"
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Authors from "../Pages/Authors"
import Author from "../Pages/Author"
import Books from "../Pages/Books"
import Book from "../Pages/Book"
import Home from "../Pages/Home"
import Header from "../Components/Header"
import Login from "../Pages/Login"

export default function RoutesApp({authors, books}){
    return <Router>
    <Header/>
    <div className="Container">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/autores' element={<Authors authors={authors} books={books}/>}/>
          <Route path='/autor' element={<Author authors={authors} books={books}/>}/>
          <Route path='/livros' element={<Books authors={authors} books={books}/>}/>
          <Route path='/livro' element={<Book authors={authors} books={books}/>}/>
      </Routes>
    </div>
  </Router>
}