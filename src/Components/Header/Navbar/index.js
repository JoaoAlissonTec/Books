import React from "react"
import LinkItem from "../../LinkItem"

export default function Navbar(){
    return <nav className="flex gap-8 justify-end bg-white sm:absolute sm:w-full">
        <LinkItem exact title="Home" to="/"/>
        <LinkItem title="Livros" to="/livros"/>
        <LinkItem title="Autores" to="/autores"/>
    </nav>
}