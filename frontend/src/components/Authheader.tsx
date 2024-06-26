import { Link } from "react-router-dom"
export const Authheader = ({type}:{type: "signup" | "signin"})=>{

    return <div className="flex flex-col items-center">
        <span className="border text-2xl lg:mx-14 font-bold lg:text-3xl">{type=== "signup"? "Create an account": "Login Credentials"}</span>

            <div className="lg:text-center text-slate-500">
                {type === "signup" ? "Already have an account?": "create new account?"}
                <Link to={type === "signup"? "/signin": "/signup"} className="underline pl-1">{type === "signup"? "Login": "Signup"}</Link>
            </div>
    </div>
}