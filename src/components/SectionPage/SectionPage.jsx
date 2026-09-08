import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import LogoBanner from '../LogoBanner/LogoBanner'
import './SectionPage.css'

function SectionPage({ title, children }) {
  return (
    <main className="app__main section-page">
      <Container>
        <Link to="/" className="section-page__back">
          ← На главную
        </Link>

        <header className="section-page__header">
          <h1 className="section-page__title">{title}</h1>
        </header>

        <div className="section-page__content">{children}</div>

        <LogoBanner />
      </Container>
    </main>
  )
}

export default SectionPage
