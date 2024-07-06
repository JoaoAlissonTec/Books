import React from "react"

export default function Card({id, title, subtitle, desc, className, children}){
    return <div id={id} className="p-4 relative border border-gray-300 rounded-lg flex flex-col gap-2">
        <div>
            <h1 className="font-bold text-lg">{title}</h1>
            <h2 className="text-gray-400 text-sm">{subtitle}</h2>
            <p className="text-base">{desc}</p>
        </div>
        <div className="flex flex-wrap justify-between w-full">
            {children}
        </div>
    </div>
}