import { useEffect, useState } from 'react'
import './Lightbox.css'

function Lightbox({ photos, initialIndex = 0, alt = 'Фото', onClose }) {
  const [index, setIndex] = useState(initialIndex)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft')
        setIndex((i) => (i - 1 + photos.length) % photos.length)
      if (event.key === 'ArrowRight')
        setIndex((i) => (i + 1) % photos.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [photos.length, onClose])

  const prev = (event) => {
    event.stopPropagation()
    setIndex((i) => (i - 1 + photos.length) % photos.length)
  }

  const next = (event) => {
    event.stopPropagation()
    setIndex((i) => (i + 1) % photos.length)
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        aria-label="Закрыть"
        onClick={onClose}
      >
        ×
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          className="lightbox__arrow lightbox__arrow--prev"
          aria-label="Предыдущее фото"
          onClick={prev}
        >
          ‹
        </button>
      )}

      <img
        src={photos[index]}
        alt={`${alt} ${index + 1}`}
        className="lightbox__image"
        onClick={(event) => event.stopPropagation()}
      />

      {photos.length > 1 && (
        <button
          type="button"
          className="lightbox__arrow lightbox__arrow--next"
          aria-label="Следующее фото"
          onClick={next}
        >
          ›
        </button>
      )}

      <p className="lightbox__counter">
        {index + 1} / {photos.length}
      </p>
    </div>
  )
}

export default Lightbox
