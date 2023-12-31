import axios from "axios"
import Container from "../Components/Container"
import Loading from "../Components/Loading"
import style from "./Technology.module.css"
import { useEffect, useState } from "react"

const Technology=()=>{
    const API = "https://matheus369k.github.io/Data/SpaceTourism.json"   
    const [datas, setDatas] = useState([])
    const [index, setIndex] = useState([])

    useEffect(() => {
        axios.get(API)
            .then((resp) => {
                //console.log(resp.data.technology);
                setDatas(resp.data.technology)
                setIndex(resp.data.technology[0])
            })
            .catch((err) => console.log(err))
    }, [])

    if (index.images !== undefined){
        if (window.innerHeight < window.innerWidth && window.innerWidth > 924) {
            var img = index.images.portrait
        } else {
            var img = index.images.landscape}
    }

    document.querySelectorAll(".link").forEach((select) => {
        select.addEventListener("click", ()=> {

            const current = document.querySelector(".link.Technology_selected__GpQdX")
            current.classList.remove(style.selected)
            select.classList.add(style.selected)
            
        })
    })

    return (
        <div>
            <Loading />
            <Container classCustom="technology">
                <ul className={style.technology_container}>
                    <h2><span>03</span>Space launch 101</h2>
                    <img src={`${img}`} alt="imagem" />
                    <nav>
                        <li className="link Technology_selected__GpQdX" onClick={() => setIndex(datas[0])}>1</li>
                        <li className="link" onClick={() => setIndex(datas[1])}>2</li>
                        <li className="link" onClick={() => setIndex(datas[2])}>3</li>
                    </nav>
                    <h3>The terminology...</h3>
                    <h1>{index.name}</h1>
                    <p>{index.description}</p>
                </ul>
            </Container>
        </div>
    )
}

export default Technology