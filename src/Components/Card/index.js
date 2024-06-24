import React from "react"
import styles from "./styles.module.css"
import RouteButton from "../RouteButton"

export default function Card({id, title, subtitle, desc, redirect}){
    return <div id={id} className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.desc}>{desc}</p>
        <RouteButton title="Sobre" to={redirect}/>
    </div>
}