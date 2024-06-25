import React from "react"
import Card from "../../Components/Card"
import RouteButton from "../../Components/RouteButton"
import styles from './styles.module.css'

export default function Books({authors, books}){
    return <div className={styles.container}>
        <h1>Livros</h1>
        <div className={styles.books}>
            {books.map((book)=><Card 
            key={book.id} 
            title={book.title} 
            subtitle={authors.find((author)=>author.id === book.author_id).nome}
            className="medium_size">
                <RouteButton to={"/livro?id="+book.id} title="Mais"/>
            </Card>)}
        </div>
    </div>
}