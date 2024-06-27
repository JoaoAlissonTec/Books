import React, { useContext, useState } from "react"
import Card from "../../Components/Card"
import RouteButton from "../../Components/RouteButton"
import styles from './styles.module.css'
import PageBar from "../../Components/PageBar";
import paginate from "../../Utils/paginate";
import getYear from '../../Utils/getYear'
import {FaPlus, FaTrash} from 'react-icons/fa'
import { Context } from "../../Context/DataContext";
import IconButton from "../../Components/IconButton";
import api from "../../Services/api";
import Button from "../../Components/Button";
import Alert from "./Alert";

export default function Books(){

    const {authors, books, setBooks} = useContext(Context)
    const [showAlert, setShowAlert] = useState()
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const {currentPageItems, totalPages} = paginate(books, currentPage, itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    function handleDelete(id){
        api.delete(`/books/${id}`).then((response)=>{
            if(response.status === 200){
                setBooks(books.filter((book)=> book._id !== id))
            }
        });
    }

    function handleShowAlert(id){
        setShowAlert(id)
    }

    return <div className={styles.container}>
        <div className={styles.title}>
            <h1>Livros</h1>
            <RouteButton title="Novo" icon={<FaPlus/>} to="/livros/new"className="primary-color"/>
        </div>
        <div className={styles.books}>
            {currentPageItems.map((book)=><Card 
            key={book._id} 
            title={book.title} 
            subtitle={getYear(book.ano_publicacao)}
            desc={authors.find((author)=>author._id === book.author._id) && authors.find((author)=>author._id === book.author._id).nome}
            className="large_size">
                {showAlert === book._id && <Alert title="Excluir" text={`Deseja excluir o livro ${book.title}?`} onClick={()=>handleDelete(book._id)} onDispose={setShowAlert}/>}
                <RouteButton title="Mais" to={"/livro?id="+book._id}/>
                <Button className="red-color" title="Excluir" onClick={()=>handleShowAlert(book._id)}/>
            </Card>)}
        </div>
        <PageBar totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
}