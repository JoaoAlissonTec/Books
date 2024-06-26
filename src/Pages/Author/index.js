import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Card from "../../Components/Card";
import RouteButton from "../../Components/RouteButton";
import {FaBook, FaChevronLeft} from 'react-icons/fa'
import IconButton from "../../Components/IconButton";
import styles from "./styles.module.css";

export default function Author({authors, books}){
    const [searchParams] = useSearchParams()

    const navigate = useNavigate();

    const author = authors.find((author)=>author._id.toString() === searchParams.get("id"));

    const booksFilter = books.filter((book)=>book.author._id === author._id);

    return <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
        <h1>Autor: {author.nome}</h1>
        <div className={styles.icon_text}>
            <FaBook/>
            <h2>Livros</h2>
        </div>
        {booksFilter.length > 0 ? booksFilter.map((book)=><Card 
        key={book._id} 
        title={book.title} 
        subtitle={book.ano_publicacao}
        desc={authors.find((author)=>author._id === book.author._id).nome}
        className="small_size">
            <RouteButton to={"/livro?id="+book._id} title="Mais"/>
        </Card>) : <p className={styles.empty}>Não há livros</p>}
    </div>
}