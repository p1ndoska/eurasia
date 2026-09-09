import { Link } from 'react-router-dom'
import Container from '../components/Container/Container'
import minsk from '../images/minsk.svg'
import './MeetingPage.css'

function MeetingPage() {
  return (
    <main className="app__main meeting-page">
      <Container>
        <Link to="/" className="meeting-page__back">
          ← На главную
        </Link>

        <article className="meeting-page__content">
          <img
            src={minsk}
            className="meeting-page__image"
            alt="Минск"
          />
          <h1 className="meeting-page__title">42-е совещание</h1>
          <p className="meeting-page__subtitle">
            Минск, Беларусь, 15–17 сентября 2026
          </p>
          <p className="meeting-page__text">
            Координационный совет «Евразия» проводит очередное совещание в Минске.
            Здесь будет размещена подробная информация о программе, участниках и
            материалах мероприятия.
          </p>
        </article>
      </Container>
    </main>
  )
}

export default MeetingPage
