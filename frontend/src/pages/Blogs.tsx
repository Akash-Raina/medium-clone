import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { UseBlocks } from "../hooks"
import { Allblogs } from "../components/Allblogs";

export const Blogs = ()=>{
    
    const {loading, blogs} = UseBlocks();
        if(loading){
            return <div>
                loading...
            </div>
        }
    return <>

        <div className="border-b">
            <Appbar/>
        </div>

        <div className="flex pt-6 border">
            <div className="lg:pt-2 lg:w-[65%] lg:px-24">
                {blogs.map(blog => <BlogCard id={blog.id}
                authorName = {blog.author.name || "Anonymous"} title ={blog.title} publishedDate = "Apr 22, 2024" content = {blog.content}
                />)}
            
            </div>
            <div className="hidden lg:flex lg:flex-col lg:gap-2 lg:w-[34%] lg:border-l lg:px-12">
                <div className="border-b p-4 text-xl text-slate-800 text-center font-semibold">All blogs</div>
                {blogs.map(blog => <Allblogs title ={blog.title} id={blog.id}/>) }
            </div>
        </div>
        
    </>
}