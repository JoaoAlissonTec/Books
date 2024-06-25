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

    let author = authors.filter((author)=>author.id === parseInt(searchParams.get("id")))[0];

    return <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
        <h1>Autor: {author.nome}</h1>
        <div className={styles.icon_text}>
            <FaBook/>
            <h2>Livros</h2>
        </div>
        {books.map((book)=>book.author_id === author.id ? <Card 
        key={book.id} 
        title={book.title} 
        subtitle={authors.find((author)=>author.id === book.author_id).nome}
        className="medium_size">
            <RouteButton to={"/livro?id="+book.id} title="Mais"/>
        </Card> : <></>)}
    </div>
}