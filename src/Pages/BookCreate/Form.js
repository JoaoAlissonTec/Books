import { useContext, useState } from "react"
import Input from '../../Components/Form/Input'
import api from "../../Services/api"
import Combobox from "../../Components/Form/Combobox"
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
    </>
}