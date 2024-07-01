import OptionButton from "./OptionButton";
import styles from "./styles.module.css"
import {motion} from "framer-motion"

export default function Menu({options}){
    return <motion.div className={styles.Menu} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {options.map(({icon, text, onClick})=><OptionButton icon={icon} text={text} onClick={onClick}/>)}
    </motion.div>
}