import React from "react"
import styles from './styles.module.css'

export default function PageButton({page, onClick, isActive}){
    return <button className={`${styles.page_button} ${isActive ? styles.active : styles.none}`} onClick={()=>onClick(page)}>
        {page}
    </button>
}