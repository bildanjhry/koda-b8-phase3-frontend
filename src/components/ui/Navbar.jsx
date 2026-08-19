import { Link } from "react-router"
import { useLocation } from "react-router"
import classNames from "classnames"

export default function Navbar(){
    const location = useLocation()

    return(
        <div className="h-16 flex w-full shadow-sm items-center px-10 justify-between">
            <section className="flex items-center gap-8 h-full">
                <div>
                    <p className="font-black text-[20px]">ShortLink</p>
                </div>
                <ul className="flex items-end h-full gap-5 text-[14px]">
                    <li className={classNames(
                        `h-[63%] w-20  mb-1`,
                        { 'border-b-2 text-(--primary) border-(--primary)' : location.pathname === "/"}
                    )}>
                        <Link to={""}>
                            Dashboard
                        </Link>
                    </li>
                    <li
                     className={classNames(
                        `h-[63%] w-20 mb-1`,
                        { 'border-b-2 text-(--primary) border-(--primary)' : location.pathname === "/analytics"}
                    )}>
                        <Link to={""}>
                            Analytics
                        </Link>
                    </li>
                    <li
                     className={classNames(
                        `h-[63%] w-10 mb-1`,
                        { 'border-b-2 text-(--primary) border-(--primary)' : location.pathname === "/my-links"}
                    )}>
                        <Link to={"/my-links"}>
                            Links
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="flex gap-7 text-sm">
                <Link 
                className="h-9 cent-content"
                to={"/login"}>
                    Login
                </Link>
                <button 
                className="bg-(--primary) rounded-md cursor-pointer font-semibold text-white h-9 w-21.75"
                type="button">
                    Logout
                </button>
            </section>
        </div>
    )
}