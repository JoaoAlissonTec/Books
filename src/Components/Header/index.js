import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Hamburger from '../Hamburger'

export default function Header(){
    return <div className="md:px-12 md:py-6 px-6 py-3 flex justify-between items-center relative">
        <Logo logo="Logo"/>
        <Navbar/>
        <Hamburger/>
    </div>
}