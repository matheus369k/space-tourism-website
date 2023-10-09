import { useEffect, useState } from "react"

import style from "./Loading.module.css"

import { GiRingedPlanet } from "react-icons/gi"

const Loading=()=>{

    const [loading, setLoading] = useState(true)

    setTimeout(()=>{
        setLoading(false)
    }, 1000)

    return (
        <>
        {loading === true && <div className={style.loading_container}> 
            <GiRingedPlanet />
        </div>}
        </>
    )
}

export default Loading

 