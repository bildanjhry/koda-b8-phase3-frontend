import dateFormat from "../libs/date-format";

import { IoSearch } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CgSpinnerTwo } from "react-icons/cg";

import LinksSkel from "../components/skeletons/Links";

export default function MyLinks(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingDel, setLoadingDel] = useState(false)
    const [activeCopy, setActiveCopy] = useState(false)
    const [url, setUrl] = useState("")

    useEffect(() => {
        async function getDataLinks() {
            setLoading(true)
            try {
                const API = import.meta.env.VITE_API_URL
                const result = await fetch(`${API}/api/links`, {
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

    async function handleDelete(id) {
        try{
            setLoadingDel(true)
            const API = import.meta.env.VITE_API_URL
            const result = await fetch(`${API}/api/links/${id}`, {
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
        } finally {
            setLoadingDel(false)
        }
    }


    async function copyToClipboard(shorten){
        try {
            setUrl(shorten)
            await navigator.clipboard.writeText(shorten)
            setActiveCopy(true)
            setTimeout(() => {
                setActiveCopy(false)
                setUrl("")
            },500)
        } catch (err) {
            console.error(err)
        } 
    }

    return (
        <div className="pb-10 bg-slate-50 h-screen flex flex-col items-center">
            <div className="flex flex-col w-2xl">

                <header className="flex flex-col gap-7">
                    <div className="flex justify-between items-center mt-10">
                        <section className="flex text-left flex-col gap-1">
                            <p className="text-[24px] font-semibold">My Links</p>
                            <p>Manage and track your shortened digital assets.</p>
                        </section>
                        <section className="flex flex-col text-right gap-1">
                            <h3 className="text-(--mute) font-semibold tracking-widest">TOTAL ACTIVE</h3>
                            <p className="text-xl font-semibold text-(--primary)">{data.length}</p>
                        </section>
                    </div>

                    <div>
                        <form 
                        className="flex shadow-md rounded-md bg-white h-12.25 rouded-md"
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
                    { loading ? <LinksSkel/> :
                    data.length > 0 ? data?.map((item) => (
                        <div
                         key={item.id}
                         className="flex h-28.5 w-full bg-white shadow-sm rounded-md px-5 ">
                            <div 
                            className="flex w-139 flex-col gap-2 text-left justify-center">
                                <div className="flex items-center gap-2 font-semibold text-[14px] text-(--primary) ">
                                    <span className="text-lg">
                                        <IoLink/>
                                    </span>
                                    <a href={item.shorted_url}>
                                       {`${item.shorted_url}`}
                                    </a>
                                </div>
                                <div className="text-sm text-(--text)">
                                    <p>{item.original_url.substring(0, 60)}</p>
                                </div>
                                <div className="flex items-center gap-5 text-sm font-semibold text-(--more-mute)">
                                    <section className="flex gap-1 items-center">
                                        <IoCalendarNumber className="text-xs  relative"/>
                                        <p>{dateFormat(item.createdAt)}</p>
                                    </section>
                                    <section className="flex gap-1 items-center">
                                        <FaChartSimple className="text-xs"/>
                                        <p>221 CLICKS</p>
                                    </section>
                                </div>
                            </div>

                            <div className="flex-1 text-xl flex items-center relative justify-between">
                                { activeCopy && url === item.shorted_url &&
                                <div className="w-15 h-7 bg-(--accent) right-20 cent-content 
                                top-11 text-[10px] font-semibold text-[#394C84] rounded-md absolute">
                                    COPIED
                                </div> 
                                }
                                
                                <button 
                                type="button"
                                onClick={() => {copyToClipboard(item.shorted_url)}}
                                className="bg-(--accent) text-[#394C84] cursor-pointer hover:bg-(--accent)/70 p-2 rounded-md">
                                    <MdContentCopy/>
                                </button>

                                <button
                                type="button" 
                                disabled={loadingDel}
                                onClick={() => {handleDelete(item.id)}}
                                className="p-1 cursor-pointer text-(--more-mute)">
                                    {loadingDel ? 
                                    <CgSpinnerTwo className="animate-spin text-red-600"/>:
                                    <RiDeleteBin6Line className="text-red-600"/>
                                    }
                                </button>
                            </div>
                        </div>
                    )) :
                    <div className="cent-content w-full h-80">
                        <h1>Links are <span className="text-(--mute)">Empty</span></h1>
                    </div>
                    }
                </main>

                <footer className="h-20 mt-5 flex justify-between items-center w-full">
                    <button className="flex items-center gap-1 text-(--mute)">
                        <FaChevronLeft className="text-[11px]"/>
                        <p className="font-semibold text-sm">Prev Page</p>
                    </button>
                    <button className="flex items-center gap-1 text-(--mute)">
                        <p className="font-semibold text-sm">Next Page</p>
                        <FaChevronRight className="text-[11px]"/>
                    </button>
                </footer>
            </div>
        </div>
    )
}