import React from "react";
import { NavLink } from "react-router-dom";

export default function LinkItem({title, to}){
    return <NavLink className="hover:text-green-600" to={to}>{title}</NavLink>
}