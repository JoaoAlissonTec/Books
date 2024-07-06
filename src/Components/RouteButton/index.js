import React from "react";
import { NavLink } from "react-router-dom";

export default function RouteButton({title, icon, to, className}){
    return <NavLink className={`px-3 py-1 text-white rounded-lg flex gap-1 items-center ${className}`} to={to}>{icon}{title}</NavLink>
}