import { Link } from 'react-router-dom'
import Container from '../components/Container/Container'
import SponsorCard from '../components/SponsorCard/SponsorCard'
import LogoBanner from '../components/LogoBanner/LogoBanner'
import sponsors from '../data/sponsors'
import './SponsorsPage.css'

function SponsorsPage() {
  return (
    <main className="app__main sponsors-page">
      <Container>
        <Link to="/" className="sponsors-page__back">
          ← На главную
        </Link>

        <header className="sponsors-page__header">
          <h1 className="sponsors-page__title">Спонсоры</h1>
        </header>

        <ul className="sponsors-page__grid">
          {sponsors.map(({ src, caption, imageAlt, href }) => (
            <li key={src} className="sponsors-page__item">
              <SponsorCard
                image={src}
                imageAlt={imageAlt}
                caption={caption}
                href={href}
              />
            </li>
          ))}
        </ul>

        <LogoBanner />
      </Container>
    </main>
  )
}

export default SponsorsPage
