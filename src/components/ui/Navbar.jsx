import { Link } from "react-router"

export default function Navbar(){
    return(
        <div className="h-16 flex w-full shadow-sm items-center px-10 justify-between">
            <section className="flex items-center gap-4">
                <div>
                    <p>ShortLink</p>
                </div>
                <ul className="flex gap-2">
                    <li>
                        <Link to={""}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>
                            Analytics
                        </Link>
                    </li>
                    <li>
                        <Link to={"/my-links"}>
                            Link
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="flex gap-7">
                <Link to={"/login"}>
                    Login
                </Link>
                <button type="button">
                    Logout
                </button>
            </section>
        </div>
    )
}