import React from "react"
import Card from "../../Components/Card";

export default function Authors({authors}){
    return <div>
        <h1>Autores</h1>
        {authors.map((author)=><Card id={author.id} title={author.nome} subtitle={author.ano_de_nascimento} desc={author.biografia} redirect={"/autor?id="+author.id}/>)}
    </div>
}