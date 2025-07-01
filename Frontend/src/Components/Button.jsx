export function Button({label, onClick} ) {
    return <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition mt-3 px-4" onClick={onClick}>{label}</button>
}