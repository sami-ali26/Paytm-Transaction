export function Input({label, placeholder, onChange} ) {
    return <div className="flex content-center items-start flex-col p-1">
        <div className="font-medium p-1 ">{label}</div>
        <input type="text" placeholder={placeholder} onChange={onChange} className="w-full border-gray-700 border-1 p-2 rounded-md "></input>
    </div>
}