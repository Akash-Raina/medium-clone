import { Link } from "react-router-dom"

export const Allblogs =({title, id}:{title:string, id:number})=>{
    return <Link to={`/blog/${id}`}>
        <div className="flex mb-5 text-slate-600 hover:text-slate-900  hover:border-l-4 hover:border-l-blue-700 hover:pl-5 hover:duration-300 text-2xl font-semibold cursor-pointer">
        {title}
        </div>
    </Link>
}