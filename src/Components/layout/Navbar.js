import { Link } from "react-router-dom"

import style from "./Navbar.module.css"

const Navbar=(props)=>{
    console.log(props.classCustom);

    return ( 
        <>
            <div className={style.barra}></div>
            <ul className={`${style[props.classCustom]} ${style.Navbar_container}`}>
                <li>
                    <Link to="/"><span>00</span>Home</Link>
                </li>
                <li>
                    <Link to="/destination"><span>01</span>Destination</Link>
                </li>
                <li>
                    <Link to="/crew"><span>02</span>Crew</Link>
                </li>
                <li>
                    <Link to="/technology"><span>03</span>Technology</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar