import React from "react"
import Reading from "../../images/reading.svg"
import styles from "./styles.module.css"
import RouteButton from "../../Components/RouteButton"

export default function Home(){
    return <div className={styles.home}>
        <div className={styles.title}>
            <h1>Bem-vindo</h1>
            <p>Nosso site é para você que deseja armazenar e visualizar seus livros.</p>
            <RouteButton title="Ver livros" to="/livros" className="primary-color"/>
        </div>
        <div className={styles.image}>
            <img src={Reading} alt="Reading"/>
        </div>
    </div>
}