export function Password({label, placeholder}) {
    return <div className="flex content-center items-start flex-col p-1">
        <div className="font-medium p-1 ">{label}</div>
        <input type="password" placeholder={placeholder} className="w-full border-gray-700 border-1 p-2 rounded-md "></input>
    </div>
}