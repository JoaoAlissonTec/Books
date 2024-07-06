import React from "react"
import IconButton from "../../Components/IconButton"
import { useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import Form from "./Form"

export default function AuthorCreate(){

    const navigate = useNavigate()

    return <div>
        <div className="flex gap-3">
            <IconButton onClick={()=>navigate(-1)} icon={<FaChevronLeft className="size-3"/>}/>
            <h1 className="font-bold text-lg">Novo Autor</h1>
        </div>
        <Form/>
    </div>
}