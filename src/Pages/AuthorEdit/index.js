import { useContext, useEffect, useState } from "react";
import Input from "../../Components/Form/Input";
import styles from "./styles.module.css"
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
    <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
    <h1>Editar Autor</h1><form onSubmit={handleSubmit} className={styles.form}>
    <Input id="nome" title="Nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
    <Input id="biografia" title="Biografia" type="text" value={biografia} onChange={(event)=>setBiografia(event.target.value)}/>
    <Input id="data" title="Ano de Nascimento" type="date" value={data} onChange={(event)=>setData(event.target.value)}/>
    <Input value="Enviar" type="submit" className="primary_color"/>
</form>
</div>
}