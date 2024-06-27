import React from "react";
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

export default function RouteButton({title, icon, to, className}){
    return <NavLink className={`${styles.routeButton} ${styles[className]}`} to={to}>{icon}{title}</NavLink>
}