import Container from "../Components/Container"
import Loading from "../Components/Loading"
import style from "./Destination.module.css"
import { useEffect, useState } from "react"
import axios from "axios"


const Destination=()=>{
    const API = "https://matheus369k.github.io/Data/SpaceTourism.json"   
    const [datas, setDatas] = useState([])
    const [index, setIndex] = useState([])

    useEffect(() => {
        axios.get(API)
            .then((resp) => {
                //console.log(resp.data.destinations);
                setDatas(resp.data.destinations)
                setIndex(resp.data.destinations[0])
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

            const current = document.querySelector(".link.Destination_selected__T5jOp")
            current.classList.remove(style.selected)
            select.classList.add(style.selected)
        })
    })

    return (
        <>
            <Loading />
            <Container classCustom="destination">
                <ul className={style.destination_container}>
                    <h2><span>01</span>Pick your destination</h2>
                    <img src={`${img}`} alt="imagem" />
                    <nav>
                        <li className="link Destination_selected__T5jOp" onClick={() => setIndex(datas[0])}>Moon</li>
                        <li className="link" onClick={() => setIndex(datas[1])}>Mars</li>
                        <li className="link" onClick={() => setIndex(datas[2])}>Europa</li>
                        <li className="link" onClick={() => setIndex(datas[3])}>Titan</li>
                    </nav>
                    <h1>{index.name}</h1>
                    <p>{index.description}</p>
                    <div className={style.dado}>
                        <h3>Avg. distance</h3>
                        <span>{index.distance}</span>
                    </div>
                    <div className={style.infor}>
                        <h3>Est. travel time</h3>
                        <span>{index.travel}</span>
                    </div>
                </ul>
            </Container>
        </>
    )
}

export default Destination