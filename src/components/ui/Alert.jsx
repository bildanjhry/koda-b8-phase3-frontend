import classNames from "classnames"

export default function Alert({alert}){
    return(
        <div className={classNames(
        `w-full h-11 mb-2 cent-content text-[14px] rounded-lg`,
         {'bg-green-100 text-green-600': alert.status === "SUCCESS"},
         {'bg-red-100 text-red-600': alert.status === "FAILED"}
        )}>
            <p>{alert.message}</p>
        </div>        
    )
}