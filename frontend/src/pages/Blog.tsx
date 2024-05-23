import { Appbar } from "../components/Appbar";
import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { SingleBlogSkeleton } from "../components/SingleBlogSkeleton";

export const Blog = ()=>{
    const { id } = useParams()
    const {loading, blog} = useBlog({id: id || ""});
    if(loading){
        return <div>
            <SingleBlogSkeleton/>
        </div>
    }
    return <div>
        <Appbar/>
        <Fullblog blog={blog}/>
    </div>
}