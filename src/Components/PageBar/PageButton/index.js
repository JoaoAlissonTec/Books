import React from "react"

export default function PageButton({page, onClick, isActive}){
    return <button className={`py-1 px-2 cursor-pointer ${isActive ? "transition-colors bg-green-600 text-white" : "border text-green-600"}`} onClick={()=>onClick(page)}>
        {page}
    </button>
}