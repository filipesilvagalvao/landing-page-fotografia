import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: aqui você pode integrar com API ou serviço de e-mail
    alert(`Obrigado, ${form.name || ""}! Mensagem enviada.`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Contato</h2>
          <p>Pronto para reservar seu ensaio ou tirar dúvidas? Vamos conversar.</p>

          <div className={styles.list}>
            <div>
              <strong>WhatsApp</strong>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">(xx) xxxxx-xxxx</a>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a>
            </div>
            <div>
              <strong>Local</strong>
              <span>São Paulo, SP</span>
            </div>
          </div>

          <p className={styles.note}>Atendimento disponível via WhatsApp ou e-mail. Resposta em até 48h útil.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Mensagem
            <textarea name="message" value={form.message} onChange={handleChange} rows={6} required />
          </label>

          <div className={styles.actions}>
            <button type="submit">Enviar mensagem</button>
            <a className={styles.whatsapp} href="https://wa.me/" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
