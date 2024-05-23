import { Link } from "react-router-dom"
import { Circle } from "./BlogCard"

export const Appbar = ()=>{

    return <div className="flex justify-between p-4 items-center border-b">
        <Link to={"/blogs"}>
            <div className="text-2xl font-semibold cursor-pointer">Medium</div>
        </Link>
        <div className="flex items-center gap-8">
            <Link to = {"/create"}>
                <div className="bg-green-700 rounded-full w-16 h-8 cursor-pointer text-center text-white text-xl font-semibold">new</div>
            </Link>
            <Circle name="Akash Raina" size="big"/>
        </div>

    </div>
}