import React, { useContext } from "react"
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import IconButton from "../../Components/IconButton";
import getYear from "../../Utils/getYear";
import { Context } from "../../Context/DataContext";

export default function Book(){

    const {authors, books} = useContext(Context)

    const {id} = useParams()

    const navigate = useNavigate();

    const book = books.find((book)=>book._id.toString() === id);

    return book && <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
        <h1>Livro: {book.title}</h1>
        <p>{getYear(book.ano_publicacao)}</p>
        <p>Autor: {authors.find((author)=>author._id === book.author._id) && authors.find((author)=>author._id === book.author._id).nome}</p>
    </div>
}