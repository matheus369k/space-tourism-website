import style from "./Container.module.css"

import img from "../img/shared/logo.svg"
import { useState } from "react"
import Navbar from "./layout/Navbar"

function Container(props) {

    const [icon, setIcon] = useState(false)

    return (
        <div className={` ${style.container} ${style[props.classCustom]}`} >
            {icon && <div className={style.menu}>
                <Navbar classCustom="menu_Open" />
            </div>
            }
            <img className={style.img} src={img} alt="logo" />
            <img className={style.icon} src={`icon-${icon ? "close" : "hamburger"}.svg`} onClick={()=>setIcon(!icon)}/>
            {props.children} 
        </div>
    )
}

export default Container