import { useEffect } from "react"
import styles from "./Testimonials.module.css"

function Testimonials() {

    useEffect(() => {
        const slides = document.querySelectorAll(".swiper-slide").length;

        const swiper = new window.Swiper('.swiper', {
            loop: slides > 3,
            slidesPerView: "auto",
            centeredSlides: "auto",
            spaceBetween: 16,
            grabCursor: true,
            effect: "coverflow",
            coverflowEffect: {
                rotate: -90,
                depth: 600,
                modifier: .5
            },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }
        });
    }, []);

    return (
        <section className={styles.testimonial} id="testimonials">

            <h2 className={styles.testimonial__title}>O que nossos <span>clientes dizem?</span></h2>
            <div className={styles.responsive}>
                <div className={styles.testimonial__swiper + " " + styles.container + " swiper"}>
                    <div className="swiper-wrapper">
                        <article className={styles.testimonial__card + " swiper-slide"}>
                            <img src="./src/img/avatar-1.webp" alt="João Pedro, head-and-shoulders portrait of a man smiling at the camera, neutral blurred background suggesting a studio setting, conveys a warm and friendly tone" className={styles.testimonial__img} />
                            <h3 className={styles.testimonial__name}>João Pedro</h3>
                            <div className={styles.testimonial__rating}>
                                <div className={styles.testimonial__stars}>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h3 className={styles.testimonial__number}>5.0</h3>
                            </div>
                            <p className={styles.testimonial__description}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet alias qui dignissimos illum aperiam odio libero voluptas laborum ducimus, eveniet, molestias quos voluptates eos magni ad iusto! Culpa, eveniet?
                            </p>
                        </article>

                        <article className={styles.testimonial__card + " swiper-slide"}>
                            <img src="./src/img/avatar-3.webp" alt="Ana Rosa, head-and-shoulders portrait of a woman smiling at the camera, soft neutral background suggesting a studio setting, conveys a joyful and approachable tone" className={styles.testimonial__img} />
                            <h3 className={styles.testimonial__name}>Ana Rosa</h3>
                            <div className={styles.testimonial__rating}>
                                <div className={styles.testimonial__stars}>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h3 className={styles.testimonial__number}>5.0</h3>
                            </div>
                            <p className={styles.testimonial__description}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet alias qui dignissimos illum aperiam odio libero voluptas laborum ducimus, eveniet, molestias quos voluptates eos magni ad iusto! Culpa, eveniet?
                            </p>
                        </article>
                        <article className={styles.testimonial__card + " swiper-slide"}>
                            <img src="./src/img/avatar-4.webp" alt="Julia Santos, head-and-shoulders portrait of a woman with a gentle smile and relaxed expression, neutral blurred background suggesting a studio setting, conveys a calm and confident tone" className={styles.testimonial__img} />
                            <h3 className={styles.testimonial__name}>Julia Santos</h3>
                            <div className={styles.testimonial__rating}>
                                <div className={styles.testimonial__stars}>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h3 className={styles.testimonial__number}>5.0</h3>
                            </div>
                            <p className={styles.testimonial__description}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet alias qui dignissimos illum aperiam odio libero voluptas laborum ducimus, eveniet, molestias quos voluptates eos magni ad iusto! Culpa, eveniet?
                            </p>
                        </article>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"><i className="fa-solid fa-angle-left"></i></div>
                    <div className="swiper-button-next"><i className="fa-solid fa-angle-right"></i></div>
                </div>
            </div>

        </section>
    )
}

export default Testimonials