import videoReunions from '../assets/image/VIDEO.mp4'
import videoTaches from '../assets/image/ordi.mp4'

const CARDS = [
  {
    title: 'La gestion des réunions',
    text: 'Organiser, suivre et clôturer les réunions.',
    video: videoReunions,
  },
  {
    title: 'La gestion des tâches',
    text: 'Créer, attribuer et suivre les actions à réaliser.',
    video: videoTaches,
  },
]

function Card({ title, text, video }) {
  return (
    <article className="card">
      <div className="card-media">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          aria-label={title}
        />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="#">En savoir plus</a>
      </div>
    </article>
  )
}

export default function Cards() {
  return (
    <section className="cards">
      {CARDS.map((c) => (
        <Card key={c.title} {...c} />
      ))}
    </section>
  )
}