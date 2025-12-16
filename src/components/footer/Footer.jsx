import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>Fotógrafo</h3>
          <p className={styles.tag}>Capturando momentos reais</p>
        </div>

        <nav className={styles.nav} aria-label="Rodapé">
          <a href="#portfolio">Portfólio</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className={styles.social}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className={styles.legal}>
        <div>© {new Date().getFullYear()} Fotógrafo. Todos os direitos reservados.</div>
        <div className={styles.linksSmall}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
