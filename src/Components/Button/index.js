import React from "react";

export default function Button({title, icon, onClick, className}){
    return <button className={`px-3 py-1 rounded-lg ${className}`} onClick={onClick}>
        {icon}{title}
    </button>
}