import React from "react"
import styles from "./styles.module.css"
import LinkItem from "../LinkItem"

export default function Navbar(){
    return <nav className={styles.nav}>
        <LinkItem exact title="Home" to="/"/>
        <LinkItem title="Autores" to="/autores"/>
        <LinkItem title="Livros" to="/"/>
    </nav>
}