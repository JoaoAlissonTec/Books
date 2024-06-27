import { useContext, useState } from "react"
import Input from '../../Components/Form/Input'
import api from "../../Services/api"
import Combobox from "../../Components/Form/Combobox"
import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"
import { Context } from "../../Context/DataContext"

export default function Form(){

    const {authors, books, setBooks} = useContext(Context)

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publish, setPublish] = useState("")

    function handleSubmit(event){
        event.preventDefault(event)
        console.log(authors.find((a)=>a._id === author))
        api.post("/books", {
            "title": title,
            "ano_publicacao": publish,
            "author": authors.find((a)=>a._id === author)
        }).then((response)=>{
            if(response.status === 201){
                setBooks([...books, {...response.data.response}])
            }
        })
        navigate("/livros")
    }

    return <>
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
    </>
}