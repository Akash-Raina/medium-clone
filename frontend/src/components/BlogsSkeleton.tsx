import { Appbar } from "./Appbar"

export const BlogsSkeleton = ()=>{
    return <>
        <div><Appbar/></div>
        <div className="flex pt-6">
            <div className="flex flex-col gap-4 px-20 w-full lg:pt-6 lg:px-24 lg:w-[65%] h-screen ">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="border-8-slate-100 rounded-full w-8 h-8 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-14 h-4 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-20 h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="border-8-slate-100 w-52  h-4 bg-slate-100"></div>
                        <div className="border-8-slate-100 w-64  h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex justify-end">
                        <div className="border-4-slate-100 w-16 h-4 bg-slate-100"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="border-8-slate-100 rounded-full w-8 h-8 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-14 h-4 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-20 h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="border-8-slate-100 w-52  h-4 bg-slate-100"></div>
                        <div className="border-8-slate-100 w-64  h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex justify-end">
                        <div className="border-4-slate-100 w-16 h-4 bg-slate-100"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="border-8-slate-100 rounded-full w-8 h-8 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-14 h-4 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-20 h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="border-8-slate-100 w-52  h-4 bg-slate-100"></div>
                        <div className="border-8-slate-100 w-64  h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex justify-end">
                        <div className="border-4-slate-100 w-16 h-4 bg-slate-100"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="border-8-slate-100 rounded-full w-8 h-8 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-14 h-4 bg-slate-100"></div>
                        <div className="border-4-slate-100 w-20 h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="border-8-slate-100 w-52  h-4 bg-slate-100"></div>
                        <div className="border-8-slate-100 w-64  h-4 bg-slate-100"></div>
                    </div>
                    <div className="flex justify-end">
                        <div className="border-4-slate-100 w-16 h-4 bg-slate-100"></div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:flex-col lg:gap-2 lg:w-[34%] lg:border-l lg:px-12">
                <div className = " m-6 border-4-slate-100 w-24 h-7 bg-slate-100 "></div>
                <div className="flex flex-col gap-6">
                    <div className = "border-4-slate-100 w-64 h-6 bg-slate-100 rounded-md"></div>
                    <div className = "border-4-slate-100 w-64 h-6 bg-slate-100 rounded-md"></div>
                    <div className = "border-4-slate-100 w-64 h-6 bg-slate-100 rounded-md"></div>
                    <div className = "border-4-slate-100 w-64 h-6 bg-slate-100 rounded-md"></div>
                    <div className = "border-4-slate-100 w-64 h-6 bg-slate-100 rounded-md"></div>
                </div>
            </div>
        </div>
    </>
}