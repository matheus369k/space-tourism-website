import style from "./Container.module.css"
import img from "../img/shared/logo.svg"

function Container(props) {

    window.addEventListener("resize", () => {
        window.location.reload()
    })

    return (
        <div className={` ${style.container} ${style[props.classCustom]}`} >
            <img className={style.img} src={img} alt="logo" />
            {props.children} 
        </div>
    )
}

export default Container