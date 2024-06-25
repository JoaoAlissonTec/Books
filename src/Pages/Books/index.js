import React, { useState } from "react"
import Card from "../../Components/Card"
import RouteButton from "../../Components/RouteButton"
import styles from './styles.module.css'
import PageBar from "../../Components/PageBar";
import paginate from "../../Utils/paginate";

export default function Books({authors, books}){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const {currentPageItems, totalPages} = paginate(books, currentPage, itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return <div className={styles.container}>
        <h1>Livros</h1>
        <div className={styles.books}>
            {currentPageItems.map((book)=><Card 
            key={book.id} 
            title={book.title} 
            subtitle={authors.find((author)=>author.id === book.author_id).nome}
            className="medium_size">
                <RouteButton to={"/livro?id="+book.id} title="Mais"/>
            </Card>)}
        </div>
        <PageBar totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
}