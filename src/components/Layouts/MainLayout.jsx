import { Outlet } from "react-router"
import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"

export default function MainLayout(){
    return(
        <div className="flex flex-col overflow-x-hidden">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}