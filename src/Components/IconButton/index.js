import React from "react"

export default function IconButton({icon, onClick, className}){
    return <button onClick={onClick} className={`bg-transparent p-2 transition-colors rounded-md ${className ? className : "border-none"} cursor-pointer flex items-center hover:bg-gray-200`}>
        {icon}
    </button>
}