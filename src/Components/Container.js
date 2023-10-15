import style from "./Container.module.css"
import { useEffect, useState } from "react"
import img from "../img/shared/logo.svg"

function Container(props) {
    /*const [click, setClick]=useState(0)
    useEffect (()=> {
       let url = window.location.href
       let PageName = url.split("#")
       console.log(PageName[1]);
        console.log(url);
    },[])*/
    return (
        <div className={` ${style.container} ${style[props.classCustom]}`} >
            <img className={style.img} src={img} alt="logo" />
            {props.children} 
        </div>
    )
}

export default Container