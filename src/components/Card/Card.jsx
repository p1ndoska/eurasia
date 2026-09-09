import { Link } from 'react-router-dom'
import './Card.css'

function Card({ image, imageAlt, title, to, href }) {
  const content = (
    <>
      <div className="card__image-wrap">
        <img src={image} alt={imageAlt} className="card__image" loading="lazy" />
      </div>
      <span className="card__title">{title}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="card"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className="card">
      {content}
    </Link>
  )
}

export default Card
