import { BlogType } from "../hooks"
import { Circle } from "./BlogCard"


export const Fullblog =({blog}: {blog:BlogType})=>{
    return <div className="flex h-screen">
        <div className="flex flex-col w-[60%]  gap-2 px-12 pt-6 lg:px-28">
            <div className="font-bold text-3xl ">{blog.title}</div>
            <div className="text-slate-500 text-sm">Posted on March 24, 2024</div>
            <div className="pt-3">{blog.content}</div>
        </div>

        <div className="flex flex-col w-[40%] gap-3 pt-6 pr-24">
            <div className="text-sm font-semibold text-slate-800">Author</div>
            <div className="flex gap-2">
                <Circle size="small" name={blog.author.name}/>
                <div className="font-bold text-2xl">{blog.author.name}</div>
            </div>
            <div className="text-slate-600 text-sm">
                The things you think about determine the quality of your mind. Your soul takes the color of your thoughts.
            </div>

        </div>
    </div>
}