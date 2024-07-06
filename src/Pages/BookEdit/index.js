import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import IconButton from "../../Components/IconButton";
import Input from "../../Components/Form/Input";
import Combobox from "../../Components/Form/Combobox";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/DataContext";
import api from "../../Services/api";
import formatDate from "../../Utils/formatDate";

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
    }, [authors, book])

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
        <div className="flex gap-3">
            <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft className="size-3"/>}/>
            <h1 className="font-bold text-lg">Editar Livro</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-2">
        <Input id="title" className="border p-1" title="Título" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <Input id="ano_publicacao" className="border p-1" title="Ano de Publicação" type="date" value={publish} onChange={(event)=>setPublish(event.target.value)}/>
        <Combobox 
        id="author" 
        title="Autor" 
        value={author} 
        options={authors.map((author)=><option key={author._id} value={author._id}>{author.nome}</option>)} 
        onChange={(event)=>setAuthor(event.target.value)}/>
        <Input value="Enviar" type="submit" className="p-1 bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer"/>
    </form>
    </div>
}