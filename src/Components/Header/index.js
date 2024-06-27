import React from 'react'
import styles from './styles.module.css'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header(){
    return <header className={styles.header}>
        <Logo logo="Logo"/>
        <Navbar/>
    </header>
}