import { Link } from "react-router-dom"

import style from "./Navbar.module.css"
import Container from "../Container"

const  Navbar=()=>{

    return ( 
        <>
        <Container>
            <ul className={style.Navbar_container}>
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
        </Container>
        </>
    )
}

export default Navbar