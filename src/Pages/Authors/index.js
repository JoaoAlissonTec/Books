import React, { useContext, useState } from "react"
import Card from "../../Components/Card";
import styles from './styles.module.css'
import RouteButton from "../../Components/RouteButton";
import PageBar from "../../Components/PageBar";
import paginate from "../../Utils/paginate";
import getYear from "../../Utils/getYear";
import { FaPlus } from "react-icons/fa";
import { Context } from "../../Context/DataContext";
import api from "../../Services/api";
import Button from "../../Components/Button";
import Alert from "./Alert";

export default function Authors(){

    const {authors, setAuthors} = useContext(Context);
    const [showAlert, setShowAlert] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const {currentPageItems, totalPages} = paginate(authors, currentPage, itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    function handleDelete(id){
        api.delete(`/autores/${id}`).then((response)=>{
            if(response.status === 200){
                setAuthors(authors.filter((author)=> author._id !== id))
            }
        });
    }

    function handleShowAlert(id){
        setShowAlert(id)
    }

    return <>
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Autores</h1>
            <RouteButton title="Novo" icon={<FaPlus/>} to="/autores/new"className="primary-color"/>
        </div>
        <div className={styles.authors}>
            {currentPageItems.map((author)=><Card 
            key={author._id}
            id={author._id} 
            title={author.nome} 
            subtitle={getYear(author.ano_de_nascimento)} 
            desc={author.biografia} 
            className="medium_size"
            >
                {showAlert === author._id && <Alert title="Excluir" text={`Deseja excluir o autor ${author.nome}?`} onClick={()=>handleDelete(author._id)} onDispose={setShowAlert}/>}
                <RouteButton title="Sobre" to={"/autor?id="+author._id}/>
                <Button className="red-color" title="Excluir" onClick={()=>handleShowAlert(author._id)}/>
            </Card>)
            }
        </div>
        <PageBar totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
    </>
}