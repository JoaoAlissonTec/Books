import React from "react";
import styles from './styles.module.css';

export default function Button({title, icon, onClick, className}){
    return <button className={`${styles.button} ${styles[className]}`} onClick={onClick}>{icon}{title}</button>
}