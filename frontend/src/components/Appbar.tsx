import { Link } from "react-router-dom"
import { Circle } from "./BlogCard"
import { CiCirclePlus } from "react-icons/ci";

export const Appbar = ()=>{

    return <div className="flex justify-between p-4 items-center border-b">
        <Link to={"/blogs"}>
            <div className="text-2xl font-semibold cursor-pointer">Medium</div>
        </Link>
        <div className="flex items-center gap-8">
            <Link to = {"/create"}>
                <div className="flex justify-center bg-green-600 rounded-full cursor-pointer text-white hover:bg-green-800"><CiCirclePlus size={35}/></div>
            </Link>
            <Circle name="Akash Raina" size="big"/>
        </div>

    </div>
}