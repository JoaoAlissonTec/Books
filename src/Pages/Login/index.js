import React, { useContext } from "react"
import {Context} from "../../Context/AuthContext"

export default function Login(){

    const {authenticated, handleLogin} = useContext(Context)

    console.log(authenticated)

    return <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Entrar</button>
    </div>
}