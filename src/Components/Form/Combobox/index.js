export default function Combobox({title, id, value, options, onChange}){
    return <div className="flex flex-col gap-3">
        <label htmlFor={id} className="text-sm">{title}</label>
        <select name={id} id={id} className="outline-none border" value={value} onChange={onChange}>
            <option value={null}>- Nenhum Author-</option>
            {options}
        </select>
    </div>
}