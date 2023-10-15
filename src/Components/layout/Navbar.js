import { Link } from "react-router-dom"

import style from "./Navbar.module.css"
import { useEffect, useState } from "react"

const Navbar=(props)=>{

    const [icon, setIcon] = useState(false)
    
    const AddClass=()=>{
        document.querySelectorAll(".link").forEach((select) => {
            select.addEventListener("click", ()=>{

                const current = document.querySelector(".link.Navbar_selected__qyaqe")
                current.classList.remove(style.selected)
                select.classList.add(style.selected)
            })
        })
    }

    const handleMenu=()=>{
        setIcon(!icon)
        const current = document.querySelector(".Navbar_menu__gYRhG")
        if (current && window.innerWidth < 668) {
            current.classList.remove("Navbar_menu__gYRhG")
        } else {
            document.getElementById("menu").classList.add(style.menu)
        }
    }
    
    localStorage.setItem("select", window.location.href)

    useEffect(()=>{
        const TagLi = document.querySelectorAll(".link")
        const pass =  localStorage.getItem("select").split("#")[1]
        if (pass === "/destination") {
            TagLi[1].classList.add(style.selected)
        }else if (pass === "/crew") {
            TagLi[2].classList.add(style.selected)
        } else if (pass === "/technology") {
            TagLi[3].classList.add(style.selected)
        }else {
            TagLi[0].classList.add(style.selected)
        }
    }, [])

    return ( 
        <div className={`${style[props.classCustom]} ${style.Navbar_container}`}>
            <div className={style.barra}></div>
            <ul id="menu">
                <li>
                    <Link className="link" onMouseEnter={()=>AddClass()} onClick={()=>handleMenu()} to="/"><span>00</span>Home</Link>
                </li>
                <li>
                    <Link className="link" id="destination" onMouseEnter={()=>AddClass()} onClick={()=>handleMenu()} to="/destination"><span>01</span>Destination</Link>
                </li>
                <li>
                    <Link className="link" onMouseEnter={()=>AddClass()} onClick={()=>handleMenu()} to="/crew"><span>02</span>Crew</Link>
                </li>
                <li>
                    <Link className="link" onMouseEnter={()=>AddClass()} onClick={()=>handleMenu()} to="/technology"><span>03</span>Technology</Link>
                </li>
            </ul>
            <img className={style.icon} src={`icon-${icon ? "close" : "hamburger"}.svg`} onClick={()=>handleMenu()}/>
        </div>
    )
}

export default Navbar