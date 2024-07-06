import React from "react"
import Reading from "../../images/reading.svg"
import RouteButton from "../../Components/RouteButton"

export default function Home(){
    return <div className="flex items-center flex-wrap p-8 h-full">
        <div className="flex flex-auto flex-col items-center min-w-52 gap-3">
            <h1 className="font-bold text-3xl">Bem-vindo</h1>
            <p className="max-w-72 text-center">Nosso site é para você que deseja armazenar e visualizar seus livros.</p>
            <RouteButton title="Ver livros" to="/livros" className="bg-green-600 hover:bg-green-700"/>
        </div>
        <div className="flex flex-auto justify-center">
            <img className="md:w-96 w-52" src={Reading} alt="Reading"/>
        </div>
    </div>
}