import Button from '../../../Components/Button'

export default function Alert({title, text, onClick, onDispose}){
    return <div className="bg-black-transparent z-50 flex items-center justify-center fixed w-full h-full top-0 left-0">
        <div className="w-1/2 bg-white p-6">
            <div>
                <h2 className='font-bold text-lg'>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-full flex justify-end gap-2">
                <Button title="Excluir" className="bg-red-500 hover:bg-red-700 text-white" onClick={onClick}/>
                <Button title="Cancelar" className="hover:bg-gray-300" onClick={()=>{onDispose(false)}}/>
            </div>
        </div>
    </div>
}