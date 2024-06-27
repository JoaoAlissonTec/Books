import React from "react"
import styles from "./styles.module.css"

export default function Logo({logo}){
    return <h1 className={styles.logo}>{logo}</h1>
}