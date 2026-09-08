import './RoundIcon.css'

function RoundIcon({ src, alt, className = '', cropScale = 1.22, href }) {
  const classes = ['round-icon', className].filter(Boolean).join(' ')

  const content = (
    <>
      <img src={src} alt={alt} className="round-icon__image" />
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={{ '--flag-crop-scale': cropScale }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={alt}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className={classes}
      style={{ '--flag-crop-scale': cropScale }}
    >
      {content}
    </div>
  )
}

export default RoundIcon
