export default function OptionButton({icon, text, onClick}){
    return <button onClick={onClick} className="w-full bg-white flex justify-center items-center gap-3 border-x border-b cursor-pointer py-1 px-2 first:border-t first:rounded-t-lg last:rounded-b-lg hover:bg-gray-300">
        {icon}
        {text}
    </button>
}