import React from "react"
import IconButton from "../../Components/IconButton"
import { useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import Form from "./Form"

export default function AuthorCreate(){

    const navigate = useNavigate()

    return <div>
        <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft/>}/>
        <h1>Novo Autor</h1>
        <Form/>
    </div>
}