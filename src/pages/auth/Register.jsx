export default function Register() {
    return (
        <div className="cent-content w-full h-screen gap-3 flex-col bg-gray-200">
            <h3>ShortLink</h3>
            <div className="flex flex-col w-[400px] bg-white p-7">
                <form action="" className="flex flex-col gap-8 w-full">
                    <header className="text-left">
                        <p className="text-2xl">Welcome Back</p>
                        <p>Please enter your details to sign in.</p>
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
                        <button 
                            type="submit"
                            className="w-full cursor-pointer h-10.5 rounded-md bg-(--primary) text-white">
                            Login
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