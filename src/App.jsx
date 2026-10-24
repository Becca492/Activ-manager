import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [active, setActive] = useState('Accueil')
  return (
    <>
      <Header active={active} setActive={setActive} />
      <Hero />
      <Cards />
      <Contact />
    </>
  )
}