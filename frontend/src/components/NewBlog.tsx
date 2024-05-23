import { ChangeEvent, useState } from "react"
import { Appbar } from "./Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const NewBlog = ()=>{

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const navigate = useNavigate();

    async function hitBackend(){
        await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content
        },{
            headers:{
                Authorization: localStorage.getItem("token")
            }
            
        })
        navigate("/blogs")
    }   

    return <div className="flex flex-col gap-2">
        <div><Appbar/></div>
        <div className="flex flex-col items-center gap-2">
            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" placeholder="Title" className=" mt-2 border-l-2 w-[70%] h-16 text-4xl pl-4 focus:outline-none"/>
            <TextEditor onChange = {(e)=>{setContent(e.target.value)}}/>
            <button onClick={hitBackend} className="bg-green-600 rounded-full w-28 h-9 text-white text-xl font-semibold hover:bg-green-700">Publish</button>

        </div>
    </div>  
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>) => void}){
    return <>
            <textarea onChange={onChange} id="message" className="block p-2.5 w-[70%] text-xl text-gray-900   rounded-lg focus:outline-none" rows={10} placeholder="Tell your story..."></textarea>
    </>
}