import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>My logo</h1>

                <input type="checkbox" id="hamburger" className={styles.header__checkbox} />

                <label htmlFor="hamburger" className={styles.header__hamBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className={styles.header__navContainer}>

                    <nav className={styles.header__nav}>
                        <a href="#home">Home</a>
                        <a href="#portfolio">Portfólio</a>
                        <a href="#about">Sobre</a>
                        <a href="#testimonials">Depoimentos</a>
                        <a href="">Contato</a>
                    </nav>

                    <div className={styles.header__socialContainer}>
                        <button className={styles.header__instagram}><i className="fa-brands fa-instagram"></i></button>
                        <button className={styles.header__whatssap}><i className="fa-brands fa-whatsapp"></i></button>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header