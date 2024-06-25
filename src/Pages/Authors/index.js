import React from "react"
import Card from "../../Components/Card";
import styles from './styles.module.css'
import RouteButton from "../../Components/RouteButton";

export default function Authors({authors}){

    return <div className={styles.container}>
        <h1>Autores</h1>
        <div className={styles.authors}>
            {authors.map((author)=><Card 
            key={author.id}
            id={author.id} 
            title={author.nome} 
            subtitle={author.ano_de_nascimento} 
            desc={author.biografia} 
            className="medium_size"
            >
                <RouteButton title="Sobre" to={"/autor?id="+author.id}/>
            </Card>)
            }
        </div>
    </div>
}