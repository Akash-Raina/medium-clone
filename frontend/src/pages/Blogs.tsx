import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { UseBlocks } from "../hooks"

export const Blogs = ()=>{
    
    const {loading, blogs} = UseBlocks();
        if(loading){
            return <div>
                loading...
            </div>
        }
    return <div className="">

        <div className="border-b">
            <Appbar/>
        </div>

        <div className="flex pt-6">
            <div className=" lg:px-12 lg:pt-2 lg:w-[60%]">
                {blogs.map(blog => <BlogCard id={blog.id}
        authorName = {blog.author.name || "Anonymous"} title ={blog.title} publishedDate = "Apr 22, 2024" content = {blog.content}
        />)}
            
        </div>
        <div className="hidden lg:block lg:w-[35%] lg:pl-2 lg:border-l">Blog list</div>
        </div>
        
    </div>
}