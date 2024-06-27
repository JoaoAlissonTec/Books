import { useContext, useState } from "react"
import Input from '../../Components/Form/Input'
import api from "../../Services/api"
import styles from "./styles.module.css"
import { Context } from "../../Context/DataContext"
import { redirect } from "react-router-dom"

export default function Form(){

    const {authors, setAuthors} = useContext(Context)

    const [nome, setNome] = useState("")
    const [biografia, setBiografia] = useState("")
    const [data, setData] = useState("")

    function handleSubmit(event){
        event.preventDefault(event)
        api.post("/autores", {
            "nome": nome,
            "biografia": biografia,
            "ano_de_nascimento": data
        }).then((response)=>{
            if(response.status === 201){
                setAuthors([...authors, {...response.data.response}])
            }
        })
        redirect("/autores")
        
    }

    return <form onSubmit={handleSubmit} className={styles.form}>
        <Input id="nome" title="Nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
        <Input id="biografia" title="Biografia" type="text" value={biografia} onChange={(event)=>setBiografia(event.target.value)}/>
        <Input id="data" title="Ano de Nascimento" type="date" value={data} onChange={(event)=>setData(event.target.value)}/>
        <Input value="Enviar" type="submit" className="primary_color"/>
    </form>
}