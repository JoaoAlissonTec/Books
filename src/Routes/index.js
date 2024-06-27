import React from "react"
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Authors from "../Pages/Authors"
import Author from "../Pages/Author"
import Books from "../Pages/Books"
import Book from "../Pages/Book"
import Home from "../Pages/Home"
import Header from "../Components/Header"
import BookCreate from "../Pages/BookCreate"
import AuthorCreate from "../Pages/AuthorCreate"

export default function RoutesApp(){
    return <Router>
    <Header/>
    <div className="Container">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/autores' element={<Authors/>}/>
          <Route path='/autores/new' element={<AuthorCreate/>}/>
          <Route path='/autor' element={<Author/>}/>
          <Route path='/livros' element={<Books/>}/>
          <Route path='/livros/new' element={<BookCreate/>}/>
          <Route path='/livro' element={<Book/>}/>
      </Routes>
    </div>
  </Router>
}