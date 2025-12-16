import styles from "./About.module.css"
import Woman from "/src/SVG/Woman"
import Events from "/src/SVG/Events"
import Wedding from "/src/SVG/Wedding"
import Pregnant from "/src/SVG/Pregnant"
import { observerPhotos } from "../../functions/moveElement"
import { useEffect, useRef } from "react"

function About() {
    const refImg = useRef(null)
    const refElements = useRef(null)

      useEffect(()=>{
        observerPhotos.observe(refImg.current)
        observerPhotos.observe(refElements.current)
      },[])

    return (
        <section className={styles.about} id="about">

            <div className={styles.about__container}>

                <div className={styles.about__img} ref={refImg}>
                    <img src="./src/img/pessoa.png" alt="sobre mim perfil" />
                </div>

                <div className={styles.about__content} ref={refElements}>

                    <h2>Sobre mim</h2>

                    <p>Prazer meu nome é "SEU NOME" e trabalho com fotos a mais de 7 anos, desde o começo tenho me dedicado a resgistrar momentos importes, emocionantes e também promover marcas pessoais e privadas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste totam architecto ipsum excepturi nihil sunt commodi praesentium cum, in rem ratione aperiam tempora. Deserunt ducimus laborum ea ipsum sint!</p>

                    <p>Meu trabalho é capturar a essência de cada momento e transformá-lo em arte, eternizando aquele instante. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolores dolor explicabo ex quo tempora, eveniet architecto illo dignissimos. Eaque repellat nam mollitia! Quae illum eligendi labore dolore laboriosam iste!</p>

                    <div className={styles.about__contentExpencience}>
                        <p><i className="fa-regular fa-camera"></i> 500+ Ensaios realizados</p>
                        <p><i className="fa-regular fa-calendar-days"></i> 7 anos de experiência</p>
                    </div>

                    <h3>Especialidades</h3>

                    <div className={styles.about__specialtiesContainer}>

                        <div className={styles.about__specialties}>
                            <Woman className={styles.svg}/>
                            <span>Retratos</span>
                        </div>

                        <div className={styles.about__specialties}>
                            <Wedding className={styles.svg}/>
                            <span>Casamento</span>
                        </div>

                        <div className={styles.about__specialties}>
                            <Pregnant className={styles.svg}/>
                            <span>Maternidade</span>
                        </div>

                        <div className={styles.about__specialties}>
                            <Events className={styles.svg}/>
                            <span>Eventos</span>
                        </div>

                    </div>
                    <button>Falar no WhatsApp <i className="fa-brands fa-whatsapp"></i></button>
                </div>
            </div>
        </section>
    )
}

export default About