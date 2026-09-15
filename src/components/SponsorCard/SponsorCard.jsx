import { Link } from 'react-router-dom'
import './SponsorCard.css'

function SponsorCard({ image, imageAlt, caption, href, to, className = '' }) {
  const content = (
    <>
      <div className="sponsor-card__image-wrap">
        <img
          src={image}
          alt={imageAlt}
          className="sponsor-card__image"
          loading="lazy"
        />
      </div>
      <p className="sponsor-card__caption">{caption}</p>
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={`sponsor-card sponsor-card--link ${className}`}
        aria-label={caption}
      >
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={`sponsor-card sponsor-card--link ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={caption}
      >
        {content}
      </a>
    )
  }

  return <article className={`sponsor-card ${className}`}>{content}</article>
}

export default SponsorCard
