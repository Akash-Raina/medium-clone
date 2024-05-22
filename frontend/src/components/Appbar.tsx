import { Link } from "react-router-dom"
import { Circle } from "./BlogCard"

export const Appbar = ()=>{

    return <div className="flex justify-between p-4 items-center border-b">
        <Link to={"/blogs"}>
            <div className="text-2xl font-semibold cursor-pointer">Medium</div>
        </Link>
        <Circle name="Akash Raina" size="big"/>
    </div>
}