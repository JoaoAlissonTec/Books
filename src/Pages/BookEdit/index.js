import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import IconButton from "../../Components/IconButton";
import Input from "../../Components/Form/Input";
import Combobox from "../../Components/Form/Combobox";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/DataContext";
import api from "../../Services/api";
import formatDate from "../../Utils/formatDate";
import styles from './styles.module.css'

export default function BookEdit(){

    const {authors, books, setBooks} = useContext(Context)

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publish, setPublish] = useState("")

    const {id} = useParams();
    const book = books.find((book)=>book._id.toString() === id)

    useEffect(()=>{
        if(book){
            setTitle(book.title)
            setPublish(formatDate(new Date(book.ano_publicacao)))
            setAuthor(book.author._id)
        }
    }, [authors, books])

    function handleSubmit(event){
        event.preventDefault(event)
        console.log(authors.find((a)=>a._id === author))
        api.put(`/books/${id}`, {
            "title": title,
            "ano_publicacao": publish,
            "author": authors.find((a)=>a._id === author)
        }).then((response)=>{
            if(response.status === 200){
                const bookIndex = books.findIndex((book)=>book._id.toString() === id)
                const tempBooks = [...books];

                tempBooks[bookIndex].title = response.data.books.title
                tempBooks[bookIndex].author = response.data.books.author
                tempBooks[bookIndex].ano_publicacao = response.data.books.ano_publicacao

                setBooks(tempBooks)
            }
        })
        navigate("/livros")
    }

    return <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
        <h1>Editar Livro</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
        <Input id="title" title="Título" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <Input id="ano_publicacao" title="Ano de Publicação" type="date" value={publish} onChange={(event)=>setPublish(event.target.value)}/>
        <Combobox 
        id="author" 
        title="Autor" 
        value={author} 
        options={authors.map((author)=><option key={author._id} value={author._id}>{author.nome}</option>)} 
        onChange={(event)=>setAuthor(event.target.value)}/>
        <Input value="Enviar" type="submit" className="primary_color"/>
    </form>
    </div>
}