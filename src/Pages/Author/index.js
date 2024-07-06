import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../../Components/Card";
import RouteButton from "../../Components/RouteButton";
import {FaBook, FaChevronLeft} from 'react-icons/fa'
import IconButton from "../../Components/IconButton";
import { Context } from "../../Context/DataContext";

export default function Author(){

    const {authors, books} = useContext(Context)

    const {id} = useParams()

    const navigate = useNavigate();

    const author = authors.find((author)=>author._id.toString() === id);

    const booksFilter = author && books.filter((book)=>book.author._id === author._id);

    return author && <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft className="size-3"/>}/>
        <h1 className="font-bold text-lg">Autor: {author.nome}</h1>
        <div className="flex items-center gap-2 mb-3">
            <FaBook className="size-3 text-green-600"/>
            <h2>Livros</h2>
        </div>
        {booksFilter.length > 0 ? booksFilter.map((book)=><Card 
        key={book._id} 
        title={book.title} 
        subtitle={book.ano_publicacao}
        desc={authors.find((author)=>author._id === book.author._id).nome}>
            <RouteButton title="Mais" to={"/livro/"+book._id} className="bg-green-600 hover:bg-green-700"/>
        </Card>) : <p className="text-gray-400">Não há livros</p>}
    </div>
}