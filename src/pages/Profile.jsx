import { FiLink2 } from "react-icons/fi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearSession } from "../redux/reducer/session";
import dateFormat from "../libs/date-format";

export default function Profile(){
    const navigate = useNavigate()
    const session = useSelector(state => state.session.session)
    const dispatch = useDispatch()

    async function handleLogout(){
        try{
            const API = import.meta.env.VITE_API_URL
            const result = await fetch(`${API}/api/logout`, {
                method:"POST",
                credentials:"include"
            })
            const response = await result.json()
            if(!response.success){
                throw new Error(response.message)
            }
            navigate("/")
            dispatch(clearSession())
        } catch(err){
            console.error(err.message)
        }
    }

    return(
        <div className="cent-content h-fit flex-1 bg-slate-50">
            <div className="flex flex-col mt-17 mb-20 text-left gap-5 w-2xl">
                <p className="text-xs font-semibold text-(--text) tracking-wider">ACCOUNT MANAGEMENT</p>
                <div className="w-full gap-10 bg-white rounded-xl shadow-xs p-6 flex flex-col">

                    <header>
                        <section className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">Profile</h3>
                            <div className="px-3 rounded-full bg-(--primary)/20 
                            text-xs cent-content font-semibold text-(--primary) py-1">PRO MEMBER</div>
                        </section>
                    </header>
                    
                    <main className="flex flex-col gap-7">
                        <section className="flex items-center gap-7 h-24">
                            <div className="rounded-lg h-full w-24 bg-(--border)">

                            </div>
                            <div className="h-full flex justify-center items-start flex-col ">
                                <p className="text-(--text-h) font-semibold">Alex Thompson</p>
                                <p className="text-(--text) text-[14px]">Software Engineer at Digital Flow</p>
                            </div>
                        </section>

                        <section className="grid grid-cols-2 gap-3 justify-between">
                            <div className="h-22.25 flex flex-col p-6 text-left 
                            justify-center rounded-lg bg-(--border) gap-px">
                                <p className="tracking-wider text-(--mute)/60 font-semibold">EMAIL ADDRESS</p>
                                <p className="text-[14px]">{session.email}</p>
                            </div>
                            <div className="h-22.25 flex flex-col p-6 text-left 
                            justify-center rounded-lg bg-(--border) gap-px">
                                <p className="tracking-wider text-(--mute)/60 font-semibold">ACCOUNT TENURE</p>
                                <p className="text-[14px]">Member Since: {dateFormat(session.createdAt)}</p>
                            </div>
                        </section>

                        <section className="h-22.25 rounded-lg bg-(--primary) w-full 
                        flex items-center justify-between px-6">
                            <div className="flex text-white items-center gap-3">
                                <div className="h-10 w-11 bg-[#FFFFFF1A] rounded-lg cent-content">
                                    <FiLink2/>
                                </div>
                                <div className="flex text-white flex-col  justify-center">
                                    <p className="tracking-wider text-xs">ACTIVE ASSETS</p>
                                    <p className="text-xl font-[1000]">12</p>
                                </div>
                            </div>
                            <div className="h-8 cent-content w-27 
                            border border-white/20 text-xs font-semibold text-white rounded-lg bg-[#FFFFFF1A]">
                                VIEW LINKS
                            </div>
                        </section>

                        <section className="flex flex-col mt-3 gap-5 text-sm w-full ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MdOutlineNotificationsNone size={20} className="text-(--more-mute)"/>
                                    <p>Email Notifications</p>
                                </div>
                                <div className="w-12 h-6 rounded-full bg-(--primary)">

                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MdOutlineSecurity size={18} className="text-(--more-mute)"/>
                                    <p>Two-Factor Authentication</p>
                                </div>
                                <div className="font-semibold text-xs text-red-700 rounded-full tracking-wider">
                                    DISABLED
                                </div>
                            </div>
                        </section>

                        <span className="w-full border-b border-(--border) my-2"></span>

                        <button 
                        onClick={handleLogout}
                        type="button"
                        className="w-full t h-11 rounded-lg bg-(--border)/60 
                        border border-(--more-mute)/20 cursor-pointer 
                        text-(--text) font-semibold cent-content text-sm gap-2">
                            <TbLogout size={17}/>
                            <p>Logout Session</p>
                        </button>

                    </main>
                </div>
                <footer className="text-center text-xs text-(--more-mute)">
                        Your data is encrypted using AES-256 standards. <span className="text-(--primary)"> Privacy Policy</span>
                </footer>
            </div>
        </div>
    )
}