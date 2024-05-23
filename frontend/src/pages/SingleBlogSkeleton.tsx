import { Appbar } from "../components/Appbar"

export const SingleBlogSkeleton = ()=>{
    return <>
        <div ><Appbar/></div>
        <div className="flex h-screen pt-6">
            <div className="flex flex-col w-[60%]  gap-4 px-20 pt-10 ">
                <div className="border-8-slate-100 h-6 w-[70%] bg-slate-100"></div>
                <div className="border-4-slate-100 rounded-xl h-4 w-[40%] bg-slate-100"></div>
                <div className="pt-3 border-8-slate-100 h-24 bg-slate-100"></div>
            </div>

            <div className="flex flex-col w-[40%] gap-3 pr-24 pt-10">
                <div className="border-4-slate-100 w-[40%] h-4 bg-slate-100"></div>
                <div className="flex gap-2">
                    <div className="border-8-slate-100 rounded-full w-8 h-8 bg-slate-100"></div>
                    <div className="border-8-slate-100 w-16 bg-slate-100"></div>
                </div>
                <div className="border-8-slate-100 w-30 h-20 bg-slate-100">
                </div>

            </div>
        </div>
    </>
}