import OptionButton from "./OptionButton";
import {motion} from "framer-motion"

export default function Menu({options}){
    return <motion.div className="absolute -bottom-5 right-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {options.map(({icon, text, onClick})=><OptionButton icon={icon} text={text} onClick={onClick}/>)}
    </motion.div>
}