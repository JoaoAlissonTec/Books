import styles from '../styles.module.css'

export default function Input({title, id, value, type, onChange, className}){
    return <div className={`${styles.input} ${styles[className]}`}>
        {title && <label htmlFor={id}>{title}</label>}
        <input id={id} type={type} value={value} onChange={onChange}/>
    </div>
}