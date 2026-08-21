import { Link } from "react-router"
import { useNavigate } from "react-router"
import { HiArrowRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import classNames from "classnames";
import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import Alert from "../../components/ui/Alert";

export default function Register() {
		const navigate = useNavigate()
        const [loading, setLoading] = useState()
        const [alert, setAlert] = useState({
            event:false, 
            status:null, 
            message:""
        })
		async function handleSubmit(e){
			e.preventDefault()
            setLoading(true)
			try{
				const data = new FormData(e.target)
                if(data.get("password") !== data.get("password-confirm")){
                    throw new Error("Make sure password are matches")
                }
                if(data.get("password").length < 8){
                     throw new Error("Minimum password is 8 characters")
                }
				const formated = new URLSearchParams(data)
				const API = import.meta.env.VITE_API_URL
				const res = await fetch(`${API}/api/register`, {
					method: "POST",
					headers:{
							"Content-Type": "application/x-www-form-urlencoded"
					},
					credentials:"include",
					body: formated.toString()
				})
				const result = await res.json()
				if(!result.success){
					throw new Error(result.message)
				}
                setAlert({
                    event:true, 
                    status:"SUCCESS", 
                    message:result.message
                })
                setTimeout(() => {
                    navigate("/login")
                },2000)

			} catch(err){
                setAlert({
                    event:true, 
                    status:"FAILED", 
                    message:err.message
                })
				console.error(err.message)
			} finally {
                setLoading(false)
                setTimeout(() => {
                    setAlert({event:false, status:null, message:""})
                },2000)
            }
		}
    return (
        <div className="cent-content w-full min-h-screen overflow-hidden gap-7 flex-col bg-slate-50 relative">
            <div className="w-lg h-90.25 absolute -left-25 -top-20 
            rounded-full bg-[#004AC60D] blur-2xl z-5">

            </div>
            
            <div className="w-lg h-90.25 absolute -right-3 bottom-0 
            rounded-full bg-[#495C950D] blur-2xl">

            </div>

            <p className="text-xl font-[1000]">ShortLink</p>
            <div className="flex flex-col w-100 rounded-lg z-10 
            border border-(--border) shadow-sm bg-white p-9">
                { alert.event && 
                    <Alert alert={alert}/>
                }              
                <form 
                    onSubmit={handleSubmit}
                    action="" 
                    className="flex flex-col text-(--text) gap-5 w-full">
                    <header className="text-left">
                        <p className="text-2xl font-semibold text-(--text-h)">Let's Go!</p>
                        <p>Join the elite architects of the web.</p>
                    </header>

                    <main className="flex mt-2 flex-col gap-2 text-[14px]">
                        <div className="flex flex-col text-left gap-1">
                            <label htmlFor="name">Fullname</label>
                            <input
                                required
                                placeholder="John Doe" 
                                className="h-10.5 text-[14px] outline-none 
                                pl-4 rounded-md border border-(--border)"
                                type="text" name="name" id="name" />
                        </div>

                        <div className="flex flex-col text-left gap-1">
                            <label htmlFor="email">Email Address</label>
                            <input
                                required
                                placeholder="name@company.com" 
                                className="h-10.5 text-[14px] outline-none 
                                pl-4 rounded-md border border-(--border)"
                                type="text" name="email" id="email" />
                        </div>

                        <div className="flex flex-col text-left gap-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password">Password</label>
                            </div>
                            <input
                                required
                                placeholder="Your secret password" 
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="password" name="password" id="password" />
                        </div>

                        <div className="flex flex-col text-left gap-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password-confirm">Confirm Password</label>
                            </div>
                            <input
                                required
                                placeholder="Your secret password confirm" 
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="password" name="password-confirm" id="password-confirm" />
                        </div>

                        <button 
                            type="submit"
                            className={classNames(
                            `w-full mt-3 cursor-pointer shadow-button cent-content font-semibold gap-2 h-11 
                            rounded-md  text-white`,
                            {'bg-(--primary)/70': loading},
                            {'bg-(--primary)': !loading}
                            )}>
                            {loading &&
                                <CgSpinnerTwo className="text-white/70 text-lg animate-spin"/>
                            }
                            <p>Sign Up</p>
                            <FaArrowRight/>
                        </button>

                        <p className="top-2 relative text-xs">By signing up, you agree to our <span className="text-(--primary)">Terms of Service</span> and <span className="text-(--primary)">Privacy Policy</span></p>

                    </main>
                </form>
            </div>
            <footer>
                <p className="text-[14px]">Already have an account? <span className="text-(--primary)">
                    <Link className="font-semibold" to={"/login"}>Login</Link></span></p>
            </footer>
        </div>
    )
}