import React from "react"
import styles from "./styles.module.css"

export default function Card({id, title, subtitle, desc, className, children}){
    return <div id={id} className={`${styles.card} ${styles[className]}`}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.control}>
            {children}
        </div>
    </div>
}