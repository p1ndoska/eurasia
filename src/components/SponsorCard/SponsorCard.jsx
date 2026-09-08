import './SponsorCard.css'

function SponsorCard({ image, imageAlt, caption, href }) {
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

  if (href) {
    return (
      <a
        href={href}
        className="sponsor-card sponsor-card--link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={caption}
      >
        {content}
      </a>
    )
  }

  return <article className="sponsor-card">{content}</article>
}

export default SponsorCard
