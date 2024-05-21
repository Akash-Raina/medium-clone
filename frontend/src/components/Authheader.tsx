import { Link } from "react-router-dom"
export const Authheader = ({type}:{type: "signup" | "signin"})=>{

    return <div>
        <span className="mx-14 text-center font-bold text-3xl">{type=== "signup"? "Create an account": "Login Credentials"}</span>

            <div className="text-center text-slate-500">
                {type === "signup" ? "Already have an account?": "create new account?"}
                <Link to={type === "signup"? "/signin": "/signup"} className="underline pl-1">{type === "signup"? "Login": "Signup"}</Link>
            </div>
    </div>
}