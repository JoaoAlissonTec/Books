import styles from './styles.module.css'

export default function OptionButton({icon, text, onClick}){
    return <button onClick={onClick} className={styles.option}>
        {icon}
        {text}
    </button>
}