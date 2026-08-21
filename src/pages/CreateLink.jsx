import { Link } from "react-router"
import { GoArrowLeft } from "react-icons/go";
import { FiLink2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { RiFlashlightLine } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdQrCode2 } from "react-icons/md";
import { CgSpinnerTwo } from "react-icons/cg";
import { useState } from "react";
import classNames from "classnames";
import Alert from "../components/ui/Alert";

export default function CreateLink(){
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState({origin:"", slug:""})
    const [alert, setAlert] = useState({
        event:false, 
        status:null, 
        message:""
    })

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
       try{
            const data = new FormData(e.target)
            const formated = new URLSearchParams(data)
            const API = import.meta.env.VITE_API_URL
            const result = await fetch(`${API}/api/links`, {
                method: "POST",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                credentials: "include",
                body: formated.toString()
            })
            const response = await result.json()
            if(!response.success){
                throw new Error(response.message)
            }
            setAlert({
                event:true, 
                status:"SUCCESS", 
                message:"Succes Shorten Url!"
            })
        } catch(err){
            setAlert({
                event:true, 
                status:"FAILED", 
                message:err.message
            })
            console.log(err)
        } finally {
            setUrl({origin:"", slug:""})
            setLoading(false)
            setTimeout(() => {
                setAlert({event:false, status:null, message:""})
            },2000)
        }
    }

    return(
        <div className="pb-10 bg-slate-50 flex flex-col items-center">
            <div className="mt-10 flex flex-col w-2xl gap-8">
                <header className="flex flex-col items-start gap-2">
                    <Link 
                    className="flex items-center mb-2 text-left text-[14px] gap-2 text-(--primary)"
                    to={"/"}>
                    <GoArrowLeft size={18}/>
                    <p>Go Back to Dashboard</p>
                    </Link>
                    <p className="text-2xl font-semibold">Create New Short Link</p>
                    <p className="text-(--text) text-[14px]">Transform your long URLs into clean, manageable assets.</p>
                </header>

                <main className="bg-white rounded-lg border 
                border-(--border) w-full h-fit p-7">

                    { alert.event &&
                        <Alert alert={alert}/>
                    }

                    <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    action="">
                        <div className="flex flex-col gap-2 text-left">
                            <label htmlFor="url" 
                            className="text-[14px] font-semibold ">DESTINATION URL <span className="text-red-500">*</span>
                            </label>
                            <div className="flex h-12.25 bg-(--base) rounded-md ">
                                <div className="w-10 text-(--mute) ml-1 cent-content">
                                    <FiLink2/>
                                </div>
                                <input
                                onChange={(e) => setUrl((prev) => 
                                    { return {...prev, origin:e.target.value}})}
                                value={url.origin}
                                required
                                placeholder="https://example.com/your-long-url-here" 
                                className="outline-none flex-1"
                                type="text" id="url" name="url" />
                            </div>
                            <p className="text-xs text-(--mute) mt-6">
                                <i>Ensure your URL starts with http:// or https://</i></p>
                        </div>

                        <div className="flex flex-col gap-2 text-left">
                            <label 
                            className="text-[14px] font-semibold"
                            htmlFor="slug">CUSTOM SLUGS (OPTIONAL)</label>
                            <div className="flex h-12.25 bg-white rounded-md border border-(--base)">
                                <div className="w-fit px-4 bg-(--base) text-(--text) cent-content">
                                    <p>short.link/</p>
                                </div>
                                <input
                                onChange={(e) => setUrl((prev) => 
                                    { return {...prev, slug:e.target.value}})}
                                value={url.slug}
                                placeholder="my-custom-slugs" 
                                className="outline-none flex-1 pl-3"
                                type="text" id="slug" name="slug" />
                            </div>
                            <p className="text-xs text-(--mute) mt-6">
                                <i>Leave blank to generate a random unique identifier.</i></p>
                        </div>

                        <div className="h-19.5 border border-(--primary)/10 flex p-5 
                        rounded-md w-full bg-[#DBE1FF4D]">
                            <div className="flex w-5 text-(--primary) justify-center items-start">
                                <AiOutlineEye className="text-xl"/>
                            </div>
                            <div className="flex text-(--primary) font-semibold flex-col 
                            justify-start h-full pl-2 items-start flex-1">
                                <p className="tracking-wider text-xs">LIVE PREVIEW</p>
                                <p className="text-(--text-h) text-[16px] font-medium">Your short link wil be: 
                                    <span className="text-(--primary)"> http://localhost:8082/s/my-custom-slugs
                                    </span></p>
                            </div>
                        </div>

                        <div className="flex mt-4 items-center gap-4">
                            <button 
                            type="submit"
                            disabled={loading}
                            className={classNames(
                            `text-white cursor-pointer h-12 rounded-lg w-42.75 
                            shadow-button cent-content gap-2`,
                            {'bg-linear-to-r from-[#004AC6] to-[#2563EB]' : !loading},
                            {'bg-(--primary)/70' : loading}
                            )}>
                                { loading && <CgSpinnerTwo className="animate-spin text-white/70"/> }
                                <p>Create Link</p>
                                <RiFlashlightLine/>
                            </button>

                            <button 
                            className="text-[#495C95] cursor-pointer h-12 rounded-md w-25 
                            cent-content gap-2">
                                <p>Cancel</p>
                            </button>
                            
                        </div>
                    </form>
                </main>

                <footer className="h-40 mt-4 px-2 grid grid-cols-2 gap-10 items-center justify-between">
                    <section className="flex items-start gap-3 h-full">
                        <div className="w-14 h-10 rounded-full cent-content bg-[#FFDBCD]">
                            <IoAnalyticsOutline className="text-xl text-[#7D2D00]"/>
                        </div>
                        <div className="flex flex-col gap-1 items-start text-left">
                            <p className="font-semibold text-sm">Real-time Analytics</p>
                            <p className="text-(--text) text-xs">
                                Track every click, geographical location, and referral source instantly.
                            </p>
                        </div>
                    </section>
                    <section className="flex items-start gap-2 h-full">
                        <div className="w-14 h-10 rounded-full cent-content bg-[#DBE1FF]">
                              <MdQrCode2 className="text-xl text-[#31447B]"/>
                        </div>
                        <div className="flex flex-col items-start gap-1 text-left">
                            <p className="font-semibold text-sm">Auto-generated QR</p>
                            <p className="text-(--text) text-xs">
                                Every link automatically creates a high-resolution QR code for print.
                            </p>
                        </div>
                    </section>
                </footer>

            </div>
        </div>
    )
}