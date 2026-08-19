import { Link } from "react-router"
import { useNavigate } from "react-router"
import { HiArrowRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";

export default function Login() {
	const navigate = useNavigate()
	async function handleSubmit(e){
		e.preventDefault()
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
			alert(result.message)
			navigate("/")

		} catch(err){
			console.error(err.message)
		}
	}

    return (
        <div className="cent-content w-full h-screen gap-7 flex-col bg-slate-50">
            <p className="text-xl font-[1000]">ShortLink</p>
            <div className="flex flex-col w-100 rounded-lg border border-(--border) shadow-sm bg-white p-8">
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
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="password" name="password" id="password" />
                        </div>
                        <button 
                            type="submit"
                            className="w-full cursor-pointer 
                            shadow-button cent-content font-semibold gap-2 h-11 rounded-md bg-(--primary) text-white">
                            <p>Log in</p>
                            <FaArrowRight/>
                        </button>

                        <div className="flex mt-2 items-center gap-2 w-full text-(--more-mute)/80 text-[13px] justify-between">
                            <span className="h-px w-20 bg-(--border)"></span>
                            <p>OR CONTINUE WITH</p>
                            <span className="h-px w-20 bg-(--border)"></span>
                        </div>
                        
                        <div className="w-full h-12 mb-4 border-2 border-(--border) rounded-lg content-center">
                            Sign in with Google
                        </div>

                    </main>
                </form>
            </div>
            <footer>
                <p>Don't have account yet? <span className="text-(--primary)">
                    <Link to={"/register"}>Sign up</Link></span></p>
            </footer>
        </div>
    )
}