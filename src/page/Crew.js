import Container from "../Components/Container"
import Loading from "../Components/Loading"
import style from "./Crew.module.css"
import { useEffect, useState } from "react"
import axios from "axios"


const Crew=()=>{

    const API = "https://matheus369k.github.io/Data/SpaceTourism.json"   
    const [datas, setDatas] = useState([])
    const [index, setIndex] = useState([])

    useEffect(() => {
        axios.get(API)
            .then((resp) => {
                //console.log(resp.data.crew);
                setDatas(resp.data.crew)
                setIndex(resp.data.crew[0])
            })
            .catch((err) => console.log(err))
    }, [])

    if (index.images !== undefined){
        if (window.innerWidth > 768) {
            var img = index.images.webp
        } else {
            var img = index.images.png}
    }

    document.querySelectorAll(".link").forEach((select) => {
        select.addEventListener("click", ()=> {

            const current = document.querySelector(".link.Crew_selected__AK81-")
            current.classList.remove(style.selected)
            select.classList.add(style.selected)
            
        })
    })
    
    return (
        <div>
            <Loading />
            <Container classCustom="crew">
                <ul className={style.crew_container}>
                    <h2><span>02</span>Meet your crew</h2>
                    <img src={`${img}`} alt="imagem" />
                    <nav>
                        <li className="link Crew_selected__AK81-" onClick={() => setIndex(datas[0])}></li>
                        <li className="link" onClick={() => setIndex(datas[1])}></li>
                        <li className="link" onClick={() => setIndex(datas[2])}></li>
                        <li className="link" onClick={() => setIndex(datas[3])}></li>
                    </nav>
                    <h3>{index.role}</h3>
                    <h1>{index.name}</h1>
                    <p>{index.bio}</p>
                </ul>
            </Container>
        </div>
    )
}

export default Crew