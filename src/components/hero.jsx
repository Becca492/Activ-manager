import tablet from '../assets/image/tablet.svg'

const STEPS = [1, 2, 3, 4].map((n) => ({
  tag: `ÉTAPE ${n}`,
  title: 'Lorem ipsum dolor sit',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
}))

export default function Hero() {
  return (
    <main className="hero">
      <div className="wrap">
        <div>
          <h1>Lorem ipsum dolor sit</h1>
          <ol className="steps">
            {STEPS.map((s) => (
              <li className="step" key={s.tag}>
                <span className="tag">{s.tag}</span>
                <div className="txt">
                  <b>{s.title}</b>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="visual">
          <img
            className="tablet-img"
            src={tablet}
            alt="Aperçu de l’application : calendrier de gestion de réunions"
          />
        </div>
      </div>
    </main>
  )
}