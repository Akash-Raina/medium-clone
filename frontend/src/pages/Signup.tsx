import { Quote } from "../components/Quote"
import { SignupAuth } from "../components/SignupAuth"


export const Signup = ()=>{
    return(
        <>
            <div className="grid lg:grid-cols-2">
                <div><SignupAuth type="signup"/></div>
                <div className="hidden lg:block"><Quote/></div>
            </div>
        </>
    )
}