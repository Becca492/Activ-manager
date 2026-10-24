import { useState } from "react";

const EMPTY = { nom: "", telephone: "", email: "", message: "" };

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    path: "M14 8h2V5h-2.5C11.1 5 10 6.4 10 8.4V10H8v3h2v6h3v-6h2.2l.4-3H13V8.6c0-.4.2-.6 1-.6z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M7 10h2.5v8H7zM8.2 6a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM11 10h2.4v1.1c.4-.7 1.2-1.3 2.5-1.3 2.4 0 3.1 1.5 3.1 3.6V18h-2.5v-3.9c0-1-.2-1.9-1.3-1.9s-1.4.9-1.4 1.9V18H11z",
  },
  {
    name: "WhatsApp",
    href: "#",
    path: "M12 4.5a7.5 7.5 0 00-6.4 11.4L4.5 19.5l3.7-1A7.5 7.5 0 1012 4.5zm3.8 10.4c-.2.5-1 1-1.5 1-.4.1-.9.1-2.8-.7-2.2-1-3.6-3.2-3.7-3.4-.1-.1-.9-1.2-.9-2.3s.6-1.6.8-1.9c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3l.6 1.5c.1.1.1.3 0 .4l-.3.4-.3.3c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.7-.9c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.2.4.3 0 .2 0 .6-.2 1z",
  },
];

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const submit = (e) => {
    e.preventDefault();
    // Ici, on branchera plus tard l'envoi réel (email, API...).
    console.log("Message à envoyer :", form);
    setForm(EMPTY);
    setSent(true);
  };

  return (
    <>
      <section className="contact" id="contacts">
        <h2>NOUS CONTACTER</h2>
        <form onSubmit={submit}>
          <label className="full">
            Noms et prénoms
            <input
              name="nom"
              value={form.nom}
              onChange={update}
              required
              autoComplete="name"
            />
          </label>
          <label>
            Téléphone
            <input
              name="telephone"
              type="tel"
              value={form.telephone}
              onChange={update}
              autoComplete="tel"
            />
          </label>
          <label>
            Adresse mail
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              required
              autoComplete="email"
            />
          </label>
          <label className="full">
            Message
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              required
            />
          </label>
          <div className="full send">
            <p role="status">{sent ? "Message envoyé, merci !" : ""}</p>
            <button className="btn-orange" type="submit">
              Envoyer un message
            </button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="socials">
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} aria-label={s.name}>
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="12" fill="#0b2a7a" />
                <path d={s.path} fill="#fff" transform="translate(0 0)" />
              </svg>
            </a>
          ))}
        </div>
        <span className="footer-logo">
          Activ<span>’</span>
        </span>
      </footer>
    </>
  );
}
