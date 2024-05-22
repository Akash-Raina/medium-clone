import { Appbar } from "../components/Appbar";
import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = ()=>{
    const { id } = useParams()
    const {loading, blog} = useBlog({id: id || ""});
    if(loading){
        return <div>
            loading...
        </div>
    }
    return <div>
        <Appbar/>
        <Fullblog blog={blog}/>
    </div>
}