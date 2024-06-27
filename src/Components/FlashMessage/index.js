import React, {useEffect, useState} from "react"
import styles from "./styles.module.css"

export default function FlashMessage({duration, message, type}){

    const [visibility, setVisibility] = useState(false)

    useEffect(()=>{
        setVisibility(true)
        setTimeout(()=>{
            setVisibility(false)
        }, duration)
    }, [])

    console.log(duration)

    return visibility ? <div className={`${styles.container} ${styles[type]}`}>
        <h1>{message}</h1>
    </div> : <></>
}