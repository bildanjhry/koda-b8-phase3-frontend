import { Link } from "react-router";

export default function Footer(){
    return(
        <div className="h-30.25 bg-(--base) px-10 flex items-center justify-between">
            <section>
                <p>© 2024 ShortLink. The Digital Architect.</p>
            </section>
            <section>
                <ul className="flex gap-3">
                    <li>
                        <Link>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Privacy Policy
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}