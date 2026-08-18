export default function Banner(){

    function handleSubmit(e){
        e.preventDefault()
        try{
            const data = new FormData(e.target)
            console.log(data.get("link"))
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div className="h-169 cent-content w-full flex-col gap-10">
            <article className="flex flex-col items-center gap-3 w-[80%]">
                <h1>
                    Shorten URLs. <span className="text-(--primary)"> Share Easily.</span>
                </h1>
                <p className="w-[60%]">
                    Create short, memorable links for your team communications.
                    Transform long, cumbersome URLs into powerful digital assets that 
                    drive engagement.
                </p>
            </article>
            <div className="cent-content gap-4">
                <button type="button" 
                className="text-white w-35 rounded-md font-bold h-12 bg-linear-to-r from-(--primary) to-(--primary)/80">
                    Get Started
                </button>
                <button 
                type="button"
                className="">
                    Learn More
                </button>
            </div>
            <form 
            onSubmit={handleSubmit}
            action="">
                <div className="flex items-center w-170 md:w-184 p-3 bg-white/40 h-22.5 rounded-md shadow-md">
                    <div className="w-full h-full bg-white rounded-md flex justify-between items-center px-2">
                        <input type="text"
                        id="link"
                        name="link"
                        className="w-[70%]"/>
                        <button type="submit" 
                        className="w-[20%] text-white rounded-md font-bold h-12 bg-linear-to-r from-(--primary) to-(--primary)/90">
                            Shorten
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}