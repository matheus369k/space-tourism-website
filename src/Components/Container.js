import style from "./Container.module.css"

import img from "../img/shared/logo.svg"
import { useEffect, useState } from "react"
import Navbar from "./layout/Navbar"

function Container(props) {
    /*const [click, setClick]=useState(0)
    useEffect (()=> {
       let url = window.location.href
       let PageName = url.split("#")
       console.log(PageName[1]);
        console.log(url);
    },[])*/

    const border = {borderBottom: "5px solid white", color:"white", paddingBottom: "25px"} 

    const [icon, setIcon] = useState(false)

    return (
        <div className={` ${style.container} ${style[props.classCustom]}`} >
            {icon && <div className={style.menu}>
                        <Navbar classCustom="on"/>
                     </div>}
            <img className={style.img} src={img} alt="logo" />
            <img className={style.icon} src={`icon-${icon ? "close" : "hamburger"}.svg`} onClick={()=>setIcon(!icon)}/>
            {props.children} 
        </div>
    )
}

export default Container