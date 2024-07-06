import React, { useContext, useState } from "react"
import Card from "../../Components/Card"
import RouteButton from "../../Components/RouteButton"
import PageBar from "../../Components/PageBar";
import paginate from "../../Utils/paginate";
import getYear from '../../Utils/getYear'
import {FaPlus, FaList, FaEdit, FaTrash} from 'react-icons/fa'
import { Context } from "../../Context/DataContext";
import IconButton from "../../Components/IconButton";
import api from "../../Services/api";
import Alert from "./Alert";
import Menu from "../../Components/Menu";
import { useNavigate } from "react-router-dom";

export default function Books(){

    const {authors, books, setBooks} = useContext(Context)
    const [showAlert, setShowAlert] = useState()
    const [showMenu, setShowMenu] = useState(0)
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const {currentPageItems, totalPages} = paginate(books, currentPage, itemsPerPage);

    const navigate = useNavigate();

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
        setShowMenu(null)
        setShowAlert(id)
    }

    return <div className="h-full flex flex-col items-center">
        <div className="w-full flex justify-between items-center px-2">
            <h1 className="font-bold text-lg">Livros</h1>
            <RouteButton title="Novo" icon={<FaPlus className="size-3"/>} to="/livros/new"className="bg-green-600 hover:bg-green-700"/>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-3 p-2 sm:grid-cols-1">
            {currentPageItems.map((book)=><Card 
            key={book._id} 
            title={book.title} 
            subtitle={getYear(book.ano_publicacao)}
            desc={authors.find((author)=>author._id === book.author._id) && authors.find((author)=>author._id === book.author._id).nome}
            className="large_size">
                {showAlert === book._id && <Alert title="Excluir" text={`Deseja excluir o livro ${book.title}?`} onClick={()=>handleDelete(book._id)} onDispose={setShowAlert}/>}
                <RouteButton title="Mais" to={"/livro/"+book._id} className="bg-green-600 hover:bg-green-700"/>
                <IconButton icon={<FaList/>} className="border rounded-lg" onClick={()=>{setShowMenu(book._id !== showMenu ? book._id : null)}}/>
                {showMenu === book._id && <Menu options={[{icon: <FaEdit className="size-3"/>, text: "Editar", onClick: ()=>{navigate("/livro/"+book._id+"/edit")}}, {icon: <FaTrash className="size-3"/>, text: "Excluir", onClick: ()=>handleShowAlert(book._id)}]}/>}
            </Card>)}
        </div>
        <PageBar totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
}