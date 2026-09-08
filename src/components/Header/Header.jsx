import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import ornament from '../../images/arnamient.svg'
import Container from '../Container/Container'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div
          className="header__ornament"
          style={{ '--ornament-url': `url(${ornament})` }}
          aria-hidden="true"
        />

        <Container className="header__container header__container--logo">
          <div className="header__logo-row">
            <Link to="/" className="header__logo-link" aria-label="На главную">
              <img
                src={logo}
                className="header__logo"
                alt="Координационный совет «Евразия» — Coordination Council «Eurasia»"
              />
            </Link>
          </div>
        </Container>
      </div>

      <Container className="header__container">
        <div className="header__title">
          <span className="header__title-line">КООРДИНАЦИОННЫЙ СОВЕТ</span>
          <span className="header__title-line">&laquo;ЕВРАЗИЯ&raquo;</span>
        </div>
      </Container>
    </header>
  )
}

export default Header
