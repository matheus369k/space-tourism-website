import { Link } from "react-router-dom"

import style from "./Navbar.module.css"
import { useEffect } from "react"
import Container from "../Container"

const Navbar=(props)=>{
    
    const AddClass=()=>{
        document.querySelectorAll(".link").forEach((select) => {
            select.addEventListener("click", ()=>{

                const current = document.querySelector(".link.Navbar_selected__qyaqe")
                current.classList.remove(style.selected)
                select.classList.add(style.selected)
            })
        })
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
        <>
        <Container classCustom="navbar">
            <div className={style.barra}></div>
            <ul className={`${style[props.classCustom]} ${style.Navbar_container}`}>
                <li>
                    <Link className="link" onMouseEnter={()=>AddClass()} to="/"><span>00</span>Home</Link>
                </li>
                <li>
                    <Link className="link" id="destination" onMouseEnter={()=>AddClass()} to="/destination"><span>01</span>Destination</Link>
                </li>
                <li>
                    <Link className="link" onMouseEnter={()=>AddClass()} to="/crew"><span>02</span>Crew</Link>
                </li>
                <li>
                    <Link className="link" onMouseEnter={()=>AddClass()} to="/technology"><span>03</span>Technology</Link>
                </li>
            </ul>
        </Container>
        </>
    )
}

export default Navbar