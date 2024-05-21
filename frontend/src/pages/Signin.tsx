import { Quote } from "../components/Quote"
import { SigninAuth } from "../components/SigninAuth"


export const Signin = ()=>{
    return(
        <>
            <div className="grid lg:grid-cols-2">
                <div><SigninAuth type="signin"/></div>
                <div className="hidden lg:block"><Quote/></div>
            </div>
        </>
    )
}