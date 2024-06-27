import styles from '../styles.module.css'

export default function Combobox({title, id, value, options, onChange}){
    return <div className={`${styles.input}`}>
        <label htmlFor={id}>{title}</label>
        <select name={id} id={id} value={value} onChange={onChange}>
            <option disabled></option>
            {options}
        </select>
    </div>
}