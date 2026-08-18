import { IoSearch } from "react-icons/io5";
import { FiLink2 } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function MyLinks(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getDataLinks() {
            try {
                const API = import.meta.env.VITE_API_URL
                const result = await fetch(`${API}/users/links`, {
                    credentials:"include"
                })
                const res = await result.json()
                setData(res.results.links)
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }
        if(data.length < 1) getDataLinks()
    },[loading])

    async function handleDelete(shorted) {
        try{
            const API = import.meta.env.VITE_API_URL
            const result = await fetch(`${API}/links/${shorted}`, {
                method:"DELETE",
                credentials:"include"
            })
            const res = await result.json()
            if(!res.success){
                throw new Error(res.message)
            }
            setLoading(true)
            setData([])
        } catch(err){
            console.error(err.message)
        }
    }

    return (
        <div className="pb-10 bg-(--base) flex flex-col items-center">
            <div className="flex flex-col w-2xl">
                <header className="flex flex-col gap-7">
                    <div className="flex justify-between items-center mt-10">
                        <section className="flex text-left flex-col gap-1">
                            <h2>My Links</h2>
                            <p>Manage and track your shortened digital assets.</p>
                        </section>
                        <section className="flex flex-col text-right gap-1">
                            <h3>TOTAL ACTIVE</h3>
                            <p className="text-xl font-semibold text-(--primary)">124</p>
                        </section>
                    </div>
                    <div>
                        <form 
                        className="flex rounded-md bg-white h-12.25 rouded-md"
                        action="">
                            <div className="w-12 cent-content">
                                <IoSearch/>
                            </div>
                            <input 
                            placeholder="Search by name or URL..."
                            className="flex-1 h-full outline-none"
                            type="text" name="shorted" id="shorted" />
                            <div className="w-12 h-full cent-content">
                                <IoFilterSharp/>
                            </div>  
                        </form>
                    </div>
                </header>
                <main className="flex flex-col gap-5 mt-10 w-full">
                    {data?.map((item) => (
                        <div
                         key={item.id}
                         className="flex h-28.5 w-full bg-white shadow-md rounded-md px-5 ">
                            <div 
                            className="flex w-139 flex-col gap-2 text-left justify-center">
                                <div className="flex items-center gap-3 text-(--primary) ">
                                    <span>
                                        <FiLink2/>
                                    </span>
                                    <p>
                                       {`localhost:8082/s/${item.shorted}`}
                                    </p>
                                </div>
                                <div className="text-sm">
                                    <p>{item.url.substring(0, 60)}</p>
                                </div>
                                <div className="flex items-center gap-5">
                                    <section className="flex gap-1 items-center">
                                        <MdOutlineCalendarToday/>
                                        <p>OCT 26, 2026</p>
                                    </section>
                                    <section className="flex gap-1 items-center">
                                        <FaChartSimple/>
                                        <p>221 CLICKS</p>
                                    </section>
                                </div>
                            </div>
                            <div className="flex-1 text-xl flex items-center justify-between">
                                <button className="bg-(--primary)/10 p-2 rounded-md">
                                    <MdContentCopy/>
                                </button>
                                <button 
                                onClick={() => {handleDelete(item.shorted)}}
                                className="p-1 cursor-pointer">
                                    <RiDeleteBin6Line/>
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    )
}