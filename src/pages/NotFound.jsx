import Footer from "../components/ui/Footer"
import { MdOutlineAnalytics } from "react-icons/md";
import { MdLinkOff } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { FiArrowLeft } from "react-icons/fi";
import { MdAddLink } from "react-icons/md";
import { MdApi } from "react-icons/md";
import { Link } from "react-router";

export default function NotFound(){

    const cards = [
        {
            icon: MdOutlineAnalytics,
            title:"Check Analytics.",
            desc:"Track your active links and traffic sources in real-time."
        },
                {
            icon: MdAddLink,
            title:"New ShortLink.",
            desc:"Create a brand new architected URL in seconds."
        },
        {
            icon: MdApi,
            title:"Developer API.",
            desc:"Create a brand new architected URL in seconds."
        },
    ]

    return(
        <div className="w-full h-fit flex flex-col bg-slate-50 relative 
        justify-center items-center overflow-hidden">
            <div className="w-lg h-90.25 absolute -left-25 -top-20 
            rounded-full bg-[#004AC60D] blur-2xl z-5">

            </div>
            
            <div className="w-lg h-90.25 absolute -right-20 -bottom-5 
            rounded-full bg-[#495C950D] blur-2xl">

            </div>
            <main className="flex-1 h-fit my-15 cent-conten w-170 z-10">
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="relative h-35 w-35 cent-content">
                        <div className="h-32 w-32 rounded-full bg-(--border)/50 cent-content">
                            <div 
                            className="bg-(--primary) shadow-button right-0 top-0 w-10 h-10 rounded-md 
                            cent-content absolute rotate-12">
                                <IoWarningOutline className="text-white" size={20}/>
                            </div>
                            <MdLinkOff size={65} className="text-(--more-mute)/60"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-[50%]">
                        <h3 className="font-[1000] text-4xl text-(--primary)">404</h3>
                        <p className="text-xl font-semibold">Page Not Found</p>
                        <article className="text-(--text)">
                            The page you're looking for doesn't exist. It may have been moved, 
                            deleted, or the link might be broken.
                        </article>
                    </div>

                    <div className="flex items-center w-113 justify-between">
                        <Link 
                        to={"/"}
                        className="cent-content gap-1 text-white rounded-lg 
                        bg-linear-to-r from-[#004AC6] to-[#2563EB] text-sm font-semibold w-54.25 h-13">
                            <FiArrowLeft size={22}/>
                            <p>Go to Dashboard</p>
                        </Link>
                        <button 
                        className="cent-content text-(--primary) bg-white 
                        rounded-lg text-sm font-semibold w-54.25 h-13 border border-(--border)">
                            <p>Report an Issue</p>
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-7 justify-between">
                        {cards.map(({icon: Icon, title, desc}) => (
                            <div 
                            key={title}
                            className=" bg-white rounded-lg p-6 flex 
                            shadow-xs flex-col gap-1 text-left">
                                <Icon size={25} className="mb-3 text-(--primary)"/>
                                <p className="text-(--text-h) font-semibold">{title}</p>
                                <p className="text-(--text) text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div> 
            </main>
            <div className="w-full z-10">
            <Footer/>
            </div>
        </div>
    )
}