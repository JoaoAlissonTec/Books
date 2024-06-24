import React from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar'
import Logo from '../Logo'

export default function Header(){
    return <header className={styles.header}>
        <Logo logo="Logo"/>
        <Navbar/>
    </header>
}