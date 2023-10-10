import Container from "../Components/Container"
import Loading from "../Components/Loading"
import style from "./Destination.module.css"
import { useEffect, useState } from "react"

const Destination=()=>{
    const API = "http://localhost:5000/destinations"   
    const [datas, setDatas] = useState([])
    const [index, setIndex] = useState([])

    useEffect(() => {
        fetch(API)
            .then((resp) => resp.json())
            .then((data) => {
                setDatas(data)
                setIndex(data[0])
            })
            .catch((err) => console.log(err))
    }, [])

    if (index.images !== undefined){
        if (window.innerWidth > 768) {
            var img = index.images.webp
        } else {
            var img = index.images.png}
    }

    return (
        <>
            <Loading />
            <Container classCustom="destination">
                <ul className={style.destination_container}>
                    <h2><span>01</span> Pick your destination</h2>
                    <img src={`${img}`} alt="imagem" />
                    <nav>
                        <li onClick={() => setIndex(datas[0])}>Moon</li>
                        <li onClick={() => setIndex(datas[1])}>Mars</li>
                        <li onClick={() => setIndex(datas[2])}>Europa</li>
                        <li onClick={() => setIndex(datas[3])}>Titan</li>
                    </nav>
                    <h1>{index.name}</h1>
                    <p>{index.description}</p>
                    <div className={style.dado}>
                        <h3>Avg. distance</h3>
                        <h3>Est. travel time</h3>
                    </div>
                    <div className={style.infor}>
                        <span>{index.distance}</span>
                        <span>{index.travel}</span>
                    </div>
                </ul>
            </Container>
        </>
    )
}

export default Destination