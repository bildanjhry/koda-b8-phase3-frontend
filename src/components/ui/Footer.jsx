import { Link } from "react-router";

export default function Footer(){

    const footerList = [
        {
            path:"",
            name:"PRIVACY POLICY"
        },
        {
            path:"",
            name:"TERMS OF SERVICES"
        },
        {
            path:"",
            name:"API DOCUMENTATION"
        },
        {
            path:"",
            name:"SUPPORT"
        },
    ]

    return(
        <div className="h-30.25 bg-(--base) font-semibold text-(--mute) 
				px-10 w-full flex items-center justify-between">
            <section>
                <p>© 2026 SHORTLINK. THE DIGITAL ARCHITECT.</p>
            </section>
            <section>
                <ul className="flex gap-15">
                    { footerList.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}