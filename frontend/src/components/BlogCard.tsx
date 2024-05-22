import { Link } from "react-router-dom"

interface CardType {
    id: number,
    authorName: string,
    title: string,
    publishedDate: string,
    content: string
}

export const BlogCard = ({id, authorName, title, publishedDate, content}: CardType)=>{
    return <Link to={`/blog/${id}`}>
        <div className=" border-b-2 cursor-pointer">
            <div className="flex gap-2 items-center pt-2">
            <Circle name={authorName}/>
            <div className="">{authorName}</div>
            <div className=" rounded-full bg-slate-400 w-1 h-1 mt-1"></div> 
            <div className="text-slate-500">{publishedDate}</div>
            </div>

            <div className="font-bold text-xl">
                {title}
            </div>

            <div className="text-slate-600 font-semibold">
                {content.slice(0,100) + "..."} 
            </div>

            <div className="text-slate-500 mt-3 flex justify-end mr-4">
                {Math.ceil(content.length/100) + " min read"}
            </div>
        </div>
    </Link>
}

export function Circle({name, size = "small"}: {name: string, size?: "small" | "big"}){
    return <div className={`border rounded-full bg-purple-600 text-red-200 flex items-center justify-center ${size === "small"? "w-8 h-8": "w-10 h-10 text-xl"}`}>
        {name[0]}
    </div>
}