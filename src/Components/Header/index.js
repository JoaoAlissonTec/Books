import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header(){
    return <div className="md:px-12 md:py-6 px-6 py-3 flex justify-between items-center">
        <Logo logo="Logo"/>
        <Navbar/>
    </div>
}