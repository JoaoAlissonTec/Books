import React from "react"
import LinkItem from "../../LinkItem"

export default function Navbar(){
    return <nav className="flex gap-8 justify-end">
        <LinkItem exact title="Home" to="/"/>
        <LinkItem title="Livros" to="/livros"/>
        <LinkItem title="Autores" to="/autores"/>
    </nav>
}