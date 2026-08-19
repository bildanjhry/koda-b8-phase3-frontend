import { Link } from "react-router"
import { useNavigate } from "react-router"

export default function Register() {
		const navigate = useNavigate()

		async function handleSubmit(e){
			e.preventDefault()
			try{
				const data = new FormData(e.target)
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
				alert(result.message)
				navigate("/login")

			} catch(err){
				console.error(err.message)
			}
		}
    return (
        <div className="cent-content w-full h-screen gap-3 flex-col bg-gray-200">
            <h3>ShortLink</h3>
            <div className="flex flex-col w-[400px] bg-white p-7">
                <form 
								onSubmit={handleSubmit}
								action="" className="flex flex-col gap-8 w-full">
                    <header className="text-left">
                        <p className="text-2xl">Create Account</p>
                        <p>Join the elite architects of the web.</p>
                    </header>
                    <main className="flex flex-col gap-5">
                        <div className="flex flex-col text-left gap-1">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="text" name="email" id="email" />
                        </div>
                        <div className="flex flex-col text-left gap-1">
                            <label htmlFor="password">Password</label>
                            <input 
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="password" name="password" id="password" />
                        </div>
												<div className="flex flex-col text-left gap-1">
                            <label htmlFor="confirm-pass">Confirm Password</label>
                            <input 
                                className="h-10.5 outline-none pl-4 rounded-md border border-(--border)"
                                type="password" name="confirm-pass" id="confirm-pass" />
                        </div>
                        <button 
                            type="submit"
                            className="w-full cursor-pointer h-10.5 rounded-md bg-(--primary) text-white">
                            Register
                        </button>
                    </main>
                    <footer>
                        <p>Don't have account yet? <span className="text-(--primary)"><Link>Sign up</Link></span></p>
                    </footer>
                </form>
            </div>
        </div>
    )
}