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
import BookEdit from "../Pages/BookEdit"
import AuthorEdit from "../Pages/AuthorEdit"

export default function RoutesApp(){
    return <Router>
    <Header/>
    <div className="Container">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/autores' element={<Authors/>}/>
          <Route path='/autores/new' element={<AuthorCreate/>}/>
          <Route path='/autor/:id/edit' element={<AuthorEdit/>}/>
          <Route path='/autor/:id' element={<Author/>}/>
          <Route path='/livros' element={<Books/>}/>
          <Route path='/livros/new' element={<BookCreate/>}/>
          <Route path='/livro/:id' element={<Book/>}/>
          <Route path='/livro/:id/edit' element={<BookEdit/>}/>
      </Routes>
    </div>
  </Router>
}