import { MdCheck } from "react-icons/md";
import Image from "../../assets/bg-info.svg"

export default function Info(){
    return(
        <div className="bg-white h-170 w-full flex">
            <section className="w-[50%] h-full flex items-center">
                <img src={Image} alt="" />
            </section>
            <section className="w-[50%] pr-30 text-left h-full flex justify-center flex-col gap-5">
                <p>DATA DRIVEN INSIGHTS</p>
                <h2>Observe your link architecture in real-time.</h2>
                <article>
                    Every click is a data point. Our dashboard provides surgical precision into 
                    where your traffic originates, who is engaging, and how your team 
                    communications are performing across the globe.
                </article>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-(--primary) rounded-full p-1 cent-content text-white">
                            <MdCheck/>
                        </div>
                        <p>Geographic Distribution Maps</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-(--primary) rounded-full p-1 cent-content text-white">
                            <MdCheck/>
                        </div>
                        <p>Device & Browser Breakdown</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-(--primary) rounded-full p-1 cent-content text-white">
                            <MdCheck/>
                        </div>
                        <p>UTM Parameter Tracking</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}