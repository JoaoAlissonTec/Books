import Button from '../../../Components/Button'
import styles from './styles.module.css'

export default function Alert({title, text, onClick, onDispose}){
    return <div className={styles.alert}>
        <div className={styles.alert_box}>
            <div className={styles.message}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.control}>
                <Button title="Sim" className="red-color" onClick={onClick}/>
                <Button title="Não" onClick={()=>{onDispose(false)}}/>
            </div>
        </div>
    </div>
}