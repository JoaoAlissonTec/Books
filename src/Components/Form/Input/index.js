export default function Input({title, id, value, type, onChange, className}){
    return <div className={"flex flex-col gap-3 "}>
        {title && <label htmlFor={id} className="text-sm">{title}</label>}
        <input id={id} type={type} value={value} onChange={onChange} className={`outline-none ${className}`}/>
    </div>
}