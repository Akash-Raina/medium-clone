import { signupType } from "@rainahaina/medium-common";
import { ChangeEvent, useState } from "react";
import { Authheader } from "./Authheader";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";

export const SignupAuth =({type}: {type: "signup" |"signin"})=>{
    const navigate = useNavigate()
    const [postInputs, setpostInputs] = useState<signupType>({
        name: "",
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    async function hitbackend(){
        try{
            setLoading(true)
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            setLoading(false)
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        }
        catch(e){
            alert("Wrong inputs");
            setLoading(false)
        }
    }
    return <div className="flex flex-col h-screen bg-slate-100 justify-center">
        <div className="mx-32">
            <Authheader type="signup"/>
            <div className="my-6 flex flex-col gap-3">

                <LabbeledInput label = "Username" placeholder="Akash Raina..." onChange={(e)=>{
                    setpostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }}/>

                <LabbeledInput label = "Email" placeholder="mail@example.com" onChange={(e)=>{
                    setpostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }}/>

                <LabbeledInput label = "Password" type="password" onChange={(e)=>{
                    setpostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }}/>

                <button onClick={hitbackend} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5  mb-2 my-4">{loading === false ? type === "signup" ? "Sign Up" : "Sign In" : <Spinner/>}</button>
            </div>
        </div>
    </div>
}

interface LabbeledInputType{
    label: string;
    placeholder?: string;
    type? : string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabbeledInput({label, placeholder, type,onChange}: LabbeledInputType){
    return <div>
        <label htmlFor="" className="text-sm font-medium text-gray-900 ">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" placeholder={placeholder} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
    </div>
}
