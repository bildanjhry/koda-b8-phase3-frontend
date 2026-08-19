import { Link } from "react-router"
import { useLocation } from "react-router"
import classNames from "classnames"
import { IoPerson } from "react-icons/io5";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createSession } from "../../redux/reducer/session";

export default function Navbar(){
    const [session, setSession] = useState(null)
    const sessionUser = useSelector(state => state.session.session)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        function getSession(){
            if(sessionUser.id){
                setSession(sessionUser)
            } else {
                setSession(null)
            }
        }
        getSession()
    },[sessionUser])

    useEffect(() => {
        async function checkUserSession() {
            try{
                const API = import.meta.env.VITE_API_URL
                const result = await fetch(`${API}/api/session`, {
                    credentials:"include"
                })
                const response = await result.json()
                if(!response.success){
                    throw new Error(response.message)
                }
                setSession(response.results)
                dispatch(createSession(response.results))
            } catch(err){
                console.error(err.message)
            }
        }
        checkUserSession()
    },[])

    return(
        <div className="h-16 flex w-full border-b-3 border-slate-100 
        items-center px-10 justify-between">
            <section className="flex items-center gap-8 h-full">
                <div>
                    <p className="font-[1000] text-[20px]">ShortLink</p>
                </div>
                <ul className="flex items-end text-(--mute) h-full gap-5 text-[14px]">
                    <li className={classNames(
                        `h-[63%] w-20  mb-1`,
                        { 'border-b-2 text-(--primary) border-(--primary)' 
                            : location.pathname === "/"}
                    )}>
                        <Link to={""}>
                            Dashboard
                        </Link>
                    </li>
                    <li
                     className={classNames(
                        `h-[63%] w-20 mb-1`,
                        { 'border-b-2 text-(--primary) border-(--primary)' 
                            : location.pathname === "/analytics"}
                    )}>
                        <Link to={""}>
                            Analytics
                        </Link>
                    </li>
                    <li
                     className={classNames(
                        `h-[63%] w-10 mb-1`,
                        { 'border-b-2 text-(--primary) border-(--primary)' 
                            : location.pathname === "/my-links"}
                    )}>
                        <Link to={"/my-links"}>
                            Links
                        </Link>
                    </li>
                </ul>
            </section>
            
            { !session ?
            <section className="flex gap-7 text-sm">
                <Link 
                className="h-9 cent-content"
                to={"/login"}>
                    Login
                </Link>
                <Link 
                to={"/register"}
                className="bg-(--primary) cent-content rounded-lg shadow-button cursor-pointer 
                font-semibold text-white h-9 w-21.75"
                type="button">
                    Sign Up
                </Link>
            </section> :

            <section className="flex gap-4 text-sm">
                <Link 
                className="cent-content"
                to={"/profile"}>
                    <div className="h-10 w-10 cent-content rounded-full bg-(--border)">
                        <IoPerson className="text-(--mute)"/>
                    </div>
                </Link>
                {/* <Link 
                to={"/register"}
                className="bg-(--primary) cent-content rounded-lg shadow-button cursor-pointer 
                font-semibold text-white h-9 w-21.75"
                type="button">
                    Log Out
                </Link> */}
            </section>
            }
        </div>
    )
}