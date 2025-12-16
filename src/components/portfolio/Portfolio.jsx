import { useContext, useState } from "react"
import styles from "./Portfolio.module.css"
import Woman from "/src/SVG/Woman"
import Pregnant from "/src/SVG/Pregnant"
import Family from "/src/SVG/Family"
import Couple from "/src/SVG/Couple"
import Wedding from "/src/SVG/Wedding"
import Photos from "../photos/Photos"
import { GlobalContext } from "../../GlobalStorage"

function Portfolio() {
    const {category, setCategory} = useContext(GlobalContext)

    return (
        <section className={styles.portfolio} id="portfolio">
            <h2 className={styles.portfolio__title}>
                Nosso mais recente <span>Portfólio.</span>
            </h2>
            <div className={styles.portfolio__categories}>

                <input type="radio" name="category" id="feminine" value="feminino" checked={category === "feminino"} onChange={(e)=>setCategory(e.target.value)}/>
                <label htmlFor="feminine"><Woman/>Feminino</label>

                <input type="radio" name="category" id="pregnant" value="gestante" checked={category === "gestante"} onChange={(e)=>setCategory(e.target.value)}/>
                <label htmlFor="pregnant"><Pregnant/>Gestante</label>

                <input type="radio" name="category" id="family" value="familia" checked={category === "familia"} onChange={(e)=>setCategory(e.target.value)}/>
                <label htmlFor="family"><Family/>Família</label>

                <input type="radio" name="category" id="couple" value="casal" checked={category === "casal"} onChange={(e)=>setCategory(e.target.value)}/>
                <label htmlFor="couple"><Couple/>Casal</label>

                <input type="radio" name="category" id="wedding" value="casamento" checked={category === "casamento"} onChange={(e)=>setCategory(e.target.value)}/>
                <label htmlFor="wedding"><Wedding/>Casamento</label>
            </div>
            <Photos fil={category}/>
            
        </section>
    )
}

export default Portfolio