export default function Hamburger(){
    return <div className="p-1 flex items-end flex-col gap-1 cursor-pointer sm:hidden">
        <div className="h-1 w-6 bg-black"/>
        <div className="h-1 w-3 bg-black"/>
        <div className="h-1 w-6 bg-black"/>
    </div>
}