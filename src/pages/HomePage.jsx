import Container from '../components/Container/Container'
import FlagIcons from '../components/FlagIcons/FlagIcons'
import MeetingInfo from '../components/MeetingInfo/MeetingInfo'
import Card from '../components/Card/Card'
import YandexMap from '../components/YandexMap/YandexMap'
import LogoBanner from '../components/LogoBanner/LogoBanner'
import homeCards from '../data/homeCards'
import minsk from '../images/minsk.svg'
import './HomePage.css'

function HomePage() {
  return (
    <main className="app__main">
      <Container>
        <FlagIcons />
        <MeetingInfo />
        <section className="home-page__cards" aria-label="Разделы сайта">
          {homeCards.map(({ title, to, href, image, imageAlt }) => (
            <Card
              key={href || to}
              image={image}
              imageAlt={imageAlt}
              title={title}
              to={to}
              href={href}
            />
          ))}
        </section>
        <img
          src={minsk}
          className="home-page__minsk"
          alt="Минск"
        />
        <YandexMap />
        <LogoBanner />
      </Container>
    </main>
  )
}

export default HomePage
