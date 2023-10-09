import Container from "../Components/Container"
import Loading from "../Components/Loading"
import style from "./Technology.module.css"
import { useEffect, useState } from "react"

const Technology=()=>{
    const API = "http://localhost:5000/technology"   
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
            var img = index.images.portrait
        } else {
            var img = index.images.landscape}
    }

    return (
        <div>
            <Loading />
            <Container classCustom="technology">
                <ul className={style.technology_container}>
                    <h2><span>03</span>  Space launch 101</h2>
                    <span>The terminology...</span>
                    <img src={`${img}`} alt="imagem" />
                    <nav>
                        <li onClick={() => setIndex(datas[0])}>1</li>
                        <li onClick={() => setIndex(datas[1])}>2</li>
                        <li onClick={() => setIndex(datas[2])}>3</li>
                    </nav>
                    <h1>{index.name}</h1>
                    <p>{index.description}</p>
                </ul>
            </Container>
        </div>
    )
}

export default Technology