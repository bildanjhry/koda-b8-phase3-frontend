import { MdCheck } from "react-icons/md";
import Image from "../../assets/bg-info.svg"

export default function Info(){
    return(
        <div className="bg-white h-170 w-full flex">
            <section className="w-[50%] h-full flex items-center relative">
                <div className="w-32 h-32 absolute -left-4 top-5 
                rounded-full bg-[#DBE1FF80] blur-2xl z-5">
                </div>

                <div className="w-48 h-48 absolute right-22 bottom-15 
                rounded-full bg-[#ACBFFF4D] blur-2xl">
                </div>

                <img 
                className="z-10"
                src={Image} alt="" />
            </section>
            <section className="w-[50%] pr-30 text-left h-full flex justify-center flex-col gap-5">
                <p className="text-(--text)">DATA DRIVEN INSIGHTS</p>
                <h2>Observe your link architecture in real-time.</h2>
                <article className="text-(--text)">
                    Every click is a data point. Our dashboard provides surgical precision into 
                    where your traffic originates, who is engaging, and how your team 
                    communications are performing across the globe.
                </article>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-(--primary) rounded-full p-1 cent-content text-white">
                            <MdCheck/>
                        </div>
                        <p>Geographic Distribution Maps</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-(--primary) rounded-full p-1 cent-content text-white">
                            <MdCheck/>
                        </div>
                        <p>Device & Browser Breakdown</p>
                    </li>
                    <li className="flex items-center gap-3">
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