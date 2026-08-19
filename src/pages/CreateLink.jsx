import { Link } from "react-router"
import { GoArrowLeft } from "react-icons/go";
import { FiLink2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { RiFlashlightLine } from "react-icons/ri";

export default function CreateLink(){

    async function handleSubmit(e) {
        e.preventDefault()
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
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div className="pb-10 bg-(--base) flex flex-col items-center">
            <div className="mt-10 flex flex-col w-2xl gap-10">
                <header className="flex flex-col items-start gap-3">
                    <Link 
                    className="flex items-center text-left gap-2 text-(--primary)"
                    to={"/"}>
                    <GoArrowLeft/>
                    <p>Go Back to Dashboard</p>
                    </Link>
                    <h2>Create New Short Link</h2>
                    <p>Transform your long URLs into clean, manageable assets.</p>
                </header>
                <main className="bg-white rounded-md w-full h-fit p-5">
                    <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    action="">
                        <div className="flex flex-col gap-2 text-left">
                            <label htmlFor="url">DESTINATION URL</label>
                            <div className="flex h-12.25 bg-(--base) rounded-md ">
                                <div className="w-10 ml-2 cent-content">
                                    <FiLink2/>
                                </div>
                                <input
                                placeholder="https://example.com/your-long-url-here" 
                                className="outline-none flex-1"
                                type="text" id="url" name="url" />
                            </div>
                            <p className="text-xs mt-6"><i>Ensure your URL starts with http:// or https://</i></p>
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                            <label htmlFor="slug">CUSTOM SLUGS (OPTIONAL)</label>
                            <div className="flex h-12.25 bg-white rounded-md border border-(--base)">
                                <div className="w-fit px-4 bg-(--base) cent-content">
                                    <p>short.link/</p>
                                </div>
                                <input
                                placeholder="my-custom-slugs" 
                                className="outline-none flex-1 pl-3"
                                type="text" id="slug" name="slug" />
                            </div>
                            <p className="text-xs mt-6"><i>Leave blank to generate a random unique identifier.</i></p>
                        </div>
                        <div className="h-19.5 flex p-4 rounded-md w-full bg-[#DBE1FF4D]">
                            <div className="flex w-5 text-(--primary) justify-center items-start">
                                <AiOutlineEye className="text-xl"/>
                            </div>
                            <div className="flex text-(--primary) text-sm font-semibold flex-col justify-start h-full pl-2 items-start flex-1">
                                <p>LIVE PREVIEW</p>
                                <p className="text-(--text-h) text-lg font-medium">Your short link wil be: 
                                    <span className="text-(--primary)"> http://localhost:8082/s/my-custom-slugs</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                            type="submit"
                            className="text-white cursor-pointer h-12 rounded-md w-42.75 bg-(--primary) cent-content gap-2">
                                <p>Create Link</p>
                                <RiFlashlightLine/>
                            </button>
                            <button className=" h-12 rounded-md w-30 cent-content gap-2">
                                <p>Cancel</p>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}