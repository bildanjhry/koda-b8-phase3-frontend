export default function LinksSkel(){
    return(
        <div className="flex flex-col gap-5">
            <div
            className="flex h-28.5 animate-pulse w-full bg-white shadow-sm rounded-md p-5 ">
                <div className="grid w-full h-full grid-rows-3 items-center">
                    <div className="w-60 rounded-full h-3 bg-(--more-mute)/20">
                    </div>
                    <div className="w-100 rounded-full h-3 bg-(--more-mute)/20">
                    </div>
                    <div className="w-100 rounded-full h-3 bg-(--more-mute)/20">
                    </div>
                </div>
            </div>
            <div
            className="flex h-28.5 animate-pulse w-full bg-white shadow-sm rounded-md p-5 ">
                <div className="grid w-full h-full grid-rows-3 items-center">
                    <div className="w-60 rounded-full h-3 bg-(--more-mute)/20">
                    </div>
                    <div className="w-100 rounded-full h-3 bg-(--more-mute)/20">
                    </div>
                    <div className="w-100 rounded-full h-3 bg-(--more-mute)/20">
                    </div>
                </div>
            </div>              
        </div>
    )
}