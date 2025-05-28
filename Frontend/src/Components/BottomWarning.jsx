import { Link } from "react-router-dom"
export function BottomWarning({label, to, pagename}) {
    return <div className="text-sm text-center mt-4">
        {label}
        <Link to={to} className="underline hover:text-blue-700  ml-1">{pagename}</Link>
    </div>
}