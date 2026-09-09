import logoBan from '../../images/logoBAN.svg'
import ornament2 from '../../images/ornament2.svg'
import './LogoBanner.css'

function LogoBanner() {
  return (
    <section className="logo-banner" aria-label="Белаэронавигация">
      <div
        className="logo-banner__ornament logo-banner__ornament--left"
        style={{ '--ornament-url': `url(${ornament2})` }}
        aria-hidden="true"
      />

      <img
        src={logoBan}
        className="logo-banner__logo"
        alt="Белаэронавигация"
      />

      <div
        className="logo-banner__ornament logo-banner__ornament--right"
        style={{ '--ornament-url': `url(${ornament2})` }}
        aria-hidden="true"
      />
    </section>
  )
}

export default LogoBanner
