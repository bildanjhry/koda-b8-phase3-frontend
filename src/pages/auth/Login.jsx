import { Link } from "react-router"
import { useNavigate } from "react-router"
import { HiArrowRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import classNames from "classnames";
import { CgSpinnerTwo } from "react-icons/cg";
import Alert from "../../components/ui/Alert";

export default function Login() {
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
			const formated = new URLSearchParams(data)
			const API = import.meta.env.VITE_API_URL
			const res = await fetch(`${API}/api/login`, {
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
			navigate("/")

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
        <div className="cent-content w-full h-screen overflow-hidden gap-7 flex-col bg-slate-50 relative">
            <div className="w-lg h-90.25 absolute -left-25 -top-20 
            rounded-full bg-[#004AC60D] blur-2xl z-5">

            </div>
            
            <div className="w-lg h-90.25 absolute -right-3 bottom-0 
            rounded-full bg-[#495C950D] blur-2xl">

            </div>

            <p className="text-xl font-[1000]">ShortLink</p>
            <div className="flex flex-col w-100 rounded-lg z-10 border border-(--border) shadow-sm bg-white p-9">
                { alert.event && 
                    <Alert alert={alert}/>
                }
                <form 
					onSubmit={handleSubmit}
				    action="" 
                    className="flex flex-col text-(--text) gap-5 w-full">
                    <header className="text-left">
                        <p className="text-2xl font-semibold text-(--text-h)">Welcome Back</p>
                        <p>Please enter your details to sign in.</p>
                    </header>

                    <main className="flex mt-2 flex-col gap-5 text-[14px]">
                        <div className="flex flex-col text-left gap-1">
                            <label htmlFor="email">Email Address</label>
                            <input
                                required
                                placeholder="name@company.com" 
                                className="h-10.5 text-[14px] outline-none pl-4 rounded-md border border-(--border)"
                                type="text" name="email" id="email" />
                        </div>

                        <div className="flex flex-col text-left gap-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password">Password</label>
                                <p className="text-(--primary) text-[13px]">Forgot Password?</p>
                            </div>
                            <input
                                required
                                placeholder="Your secret password" 
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="password" name="password" id="password" />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className={classNames(
                            `w-full cursor-pointer shadow-button cent-content font-semibold gap-2 h-11 
                            rounded-md  text-white`,
                            {'bg-(--primary)/70': loading},
                            {'bg-(--primary)': !loading}
                            )}>
                            {loading &&
                            <CgSpinnerTwo className="text-white/70 text-lg animate-spin"/>
                            }
                            <p>Log in</p>
                            <FaArrowRight/>
                        </button>

                        <div className="flex mt-2 items-center gap-2 w-full text-(--more-mute)/80 text-[13px] justify-between">
                            <span className="h-px w-20 bg-(--border)"></span>
                            <p>OR CONTINUE WITH</p>
                            <span className="h-px w-20 bg-(--border)"></span>
                        </div>
                        
                        <div className="w-full font-semibold h-12 mb-4 border-2 border-(--border) rounded-lg content-center">
                            Sign in with Google
                        </div>

                    </main>
                </form>
            </div>
            <footer>
                <p className="text-[14px]">Don't have account yet? <span className="text-(--primary)">
                    <Link className="font-semibold" to={"/register"}>Sign up</Link></span></p>
            </footer>
        </div>
    )
}