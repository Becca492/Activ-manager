const LINKS = ['Accueil', 'À propos', 'Fonctionnalités', 'Contacts']

export default function Header({ active, setActive }) {
  return (
    <header>
      <a className="logo" href="#" aria-label="Activ’Manager, accueil">
        <span className="a">Activ’</span>
        <span className="m">Manager</span>
      </a>
      <nav aria-label="Navigation principale">
        {LINKS.map((l) => (
          <a
            key={l}
            href="#"
            aria-current={l === active ? 'page' : undefined}
            onClick={(e) => { e.preventDefault(); setActive(l) }}
          >
            {l}
          </a>
        ))}
        <button className="btn" type="button">S’inscrire</button>
      </nav>
    </header>
  )
}