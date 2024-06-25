import React from "react"
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom"
import IconButton from "../../Components/IconButton";

export default function Book({authors, books}){
    const [searchParams] = useSearchParams()

    const navigate = useNavigate();

    let book = books.filter((book)=>book.id === parseInt(searchParams.get("id")))[0];

    return <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
        <h1>Livro: {book.title}</h1>
    </div>
}