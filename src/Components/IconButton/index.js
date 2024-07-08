import React from "react"

export default function IconButton({icon, text, onClick, className}){
    return <button onClick={onClick} className={`bg-transparent p-2 transition-colors rounded-md ${className ? className : "border-none"} cursor-pointer flex items-center gap-2 hover:bg-gray-200`}>
        {icon}
        {text && <p>{text}</p>}
    </button>
}