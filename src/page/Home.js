import Container from "../Components/Container"
import Loading from "../Components/Loading"

import style from "./Home.module.css"

const Home=()=>{

    const Explore=()=>{
        const url = window.location.href
        window.open(`${url}destination`, '_self')

        document.querySelector(".link.Navbar_selected__qyaqe").classList.remove("Navbar_selected__qyaqe")
        document.querySelector("#destination").classList.add("Navbar_selected__qyaqe")
    }

    return (
        <>
            <Loading />
            <Container classCustom="home">
                <article className={style.home_container}>
                    <h2>So, you want to travel to</h2>
                    <h1>Space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                    <button onClick={()=>Explore()}>Explore</button>
                </article>
            </Container>
        </>
    )
}

export default Home