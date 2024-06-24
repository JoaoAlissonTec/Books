import React from "react";
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

export default function RouteButton({title, to}){
    return <NavLink className={styles.routeButton} to={to}>{title}</NavLink>
}