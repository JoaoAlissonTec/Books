import React, { useState } from "react"
import Card from "../../Components/Card";
import styles from './styles.module.css'
import RouteButton from "../../Components/RouteButton";
import PageBar from "../../Components/PageBar";
import paginate from "../../Utils/paginate";

export default function Authors({authors}){

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const {currentPageItems, totalPages} = paginate(authors, currentPage, itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return <div className={styles.container}>
        <h1>Autores</h1>
        <div className={styles.authors}>
            {currentPageItems.map((author)=><Card 
            key={author.id}
            id={author.id} 
            title={author.nome} 
            subtitle={author.ano_de_nascimento} 
            desc={author.biografia} 
            className="medium_size"
            >
                <RouteButton title="Sobre" to={"/autor?id="+author.id}/>
            </Card>)
            }
        </div>
        <PageBar totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
}