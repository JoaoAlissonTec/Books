import React from "react";
import style from "./styles.module.css"
import { NavLink } from "react-router-dom";

export default function LinkItem({title, to}){
    return <NavLink className={style.item} to={to}>{title}</NavLink>
}