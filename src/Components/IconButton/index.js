import React from "react"
import styles from './styles.module.css'

export default function IconButton({icon, onClick}){
    return <button onClick={onClick} className={styles.icon_button}>{icon}</button>
}