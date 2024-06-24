import React from "react"
import { useSearchParams } from "react-router-dom"

export default function Author({authors}){
    const [searchParams] = useSearchParams()

    let author = authors.filter((author)=>author.id === parseInt(searchParams.get("id")))[0];

    return <div>
        <h1>Autor: {author.nome}</h1>
    </div>
}