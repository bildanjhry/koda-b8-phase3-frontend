import { useState } from "react";
import { FiLink2 } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-router";

export default function Banner(){
    const [shorten, setShorten] = useState("")
    async function handleSubmit(e){
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
            setShorten(response.results.short_url)

        } catch(err){
            console.log(err)
        }
    }

    async function copyToClipboard(){
        try {
            await navigator.clipboard.writeText(shorten)
            console.log("Copied!")
        } catch (err) {
            console.error("Gagal copy:", err)
        }
    }

    return(
        <div className="h-169 cent-content size-200 bg-radial from-[#004AC60D] to-[#004AC600] w-full flex-col gap-10">

            <article className="flex flex-col items-center gap-3 w-[80%]">
                <h1>
                    Shorten URLs. <span className="text-(--primary)"> Share Easily.</span>
                </h1>
                <p className="w-[55%]">
                    Create short, memorable links for your team communications.
                    Transform long, cumbersome URLs into powerful digital assets that 
                    drive engagement.
                </p>
            </article>

            <div className="cent-content gap-4 text-[14px]">
                <button type="button" 
                className="text-white w-35 rounded-md font-bold h-12 
                bg-linear-to-r from-(--primary) to-(--primary)/80">
                    Get Started
                </button>
                <button 
                type="button"
                className="w-35 h-12 rounded-md border border-(--border) 
                text-(--primary) font-bold">
                    Learn More
                </button>
            </div>

            <form 
            onSubmit={handleSubmit}
            action="">
                <div className="flex items-center w-170 md:w-184 p-3 bg-white/20 h-22.5 
                rounded-lg shadow-cus">
                    <div className="w-full h-full bg-white rounded-lg flex justify-between 
                    items-center px-2">
                        <input type="text"
                        id="url"
                        name="url"
                        placeholder="https://very-long-architectural-url.com/asset-id-99238-x1"
                        className="flex-1 h-full pt-1 pl-4 outline-none"/>
                        <button type="submit" 
                        className="w-[20%] cursor-pointer text-white 
                        rounded-md font-bold h-12 bg-linear-to-r from-(--primary) to-(--primary)/90">
                            Shorten
                        </button>
                    </div>
                </div>
                
                { shorten !== "" &&
                <div className="h-15 mt-xp flex font-semibold text-sm items-center overflow-hidden 
                bg-white rounded-md shadow-md w-full">
                    <button 
                    type="button"
                    className="w-10 ml-2 pl-4 rounded-l-md bg-gray-50  text-(--primary) h-[80%] 
                    cent-content cursor-pointer">
                        <FiLink2 className="text-lg"/>
                    </button>
                    <div className="flex-1 text-left pl-2 h-[80%] flex  items-center bg-gray-50">
                        <Link to={shorten}>
                            <p className="text-(--primary)">{shorten}</p>
                        </Link>
                    </div>
                    <button 
                    type="button"
                    onClick={copyToClipboard}
                    className="cursor-pointer cent-content h-[80%] bg-gray-50 flex mr-2 rounded-r-md w-15">
                        <FiCopy className="text-md"/>
                    </button>
                </div> }
            </form>

        </div>
    )
}