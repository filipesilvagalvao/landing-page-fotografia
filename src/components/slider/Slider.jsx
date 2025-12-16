import styles from "./Slider.module.css"
import { GlobalContext } from "../../GlobalStorage"
import { useContext } from "react"
import shuffleArray from "../../functions/shuffle"

function Slider() {
    const {data} = useContext(GlobalContext)
    if(data.length === 0) return null
    return (
        <section className={styles.slider} id="home">
            <div className={styles.slider__container}>
                {shuffleArray(data.slideshow).map((item)=>(
                    <img src={item.foto} alt={item.alt} key={item.id}/>
                ))}
            </div>
        </section>
    )
}

export default Slider