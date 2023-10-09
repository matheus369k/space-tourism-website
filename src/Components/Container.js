import style from "./Container.module.css"

import img from "../img/shared/logo.svg"
import { useState } from "react"

function Container(props) {

    const [icon, setIcon] = useState(false)
    console.log(icon);

    return (
        <div className={` ${style.container} ${style[props.classCustom] } `} >
            {icon && <div className={style.menu}></div>}
            <img className={style.img} src={img} alt="logo" />
            <img className={style.icon} src={`icon-${icon ? "close" : "hamburger"}.svg`} onClick={()=>setIcon(!icon)}/>
            {props.children} 
        </div>
    )
}

export default Container