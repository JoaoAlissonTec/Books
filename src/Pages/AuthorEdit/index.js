import { useContext, useEffect, useState } from "react";
import Input from "../../Components/Form/Input";
import { redirect, useNavigate, useParams } from "react-router-dom";
import api from "../../Services/api";
import { Context } from "../../Context/DataContext";
import formatDate from "../../Utils/formatDate";
import IconButton from "../../Components/IconButton";
import { FaChevronLeft } from "react-icons/fa";

export default function AuthorEdit(){

    const navigate = useNavigate()

    const {authors, setAuthors} = useContext(Context)

    const {id} = useParams();
    const author = authors.find((author)=>author._id.toString() === id)

    const [nome, setNome] = useState("")
    const [biografia, setBiografia] = useState("")
    const [data, setData] = useState("")

    useEffect(()=>{
        if(author){
            setNome(author.nome)
            setBiografia(author.biografia)
            setData(formatDate(new Date(author.ano_de_nascimento)))
        }
    }, [author])


    function handleSubmit(event){
        event.preventDefault(event)
        api.put(`/autores/${id}`, {
            "nome": nome,
            "biografia": biografia,
            "ano_de_nascimento": data
        }).then((response)=>{
            if(response.status === 200){

                const authorIndex = authors.findIndex((author)=>author._id.toString() === id)
                const tempAuthors = [...authors];

                tempAuthors[authorIndex].nome = response.data.author.nome
                tempAuthors[authorIndex].biografia = response.data.author.biografia
                tempAuthors[authorIndex].ano_publicacao = response.data.author.ano_de_nascimento

                setAuthors(tempAuthors)
            }
        })
        redirect("/autores")
        
    }

    return <div>
    <div className="flex gap-3">
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft className="size-3"/>}/>
        <h1 className="font-bold text-lg">Editar Autor</h1>
    </div>
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-2">
    <Input id="nome" className="border p-1" title="Nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
    <Input id="biografia" className="border p-1" title="Biografia" type="text" value={biografia} onChange={(event)=>setBiografia(event.target.value)}/>
    <Input id="data" className="border p-1" title="Ano de Nascimento" type="date" value={data} onChange={(event)=>setData(event.target.value)}/>
    <Input value="Enviar" type="submit" className="p-1 bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer"/>
</form>
</div>
}