import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionPage from '../components/SectionPage/SectionPage'
import PagePlaceholder from '../components/PagePlaceholder/PagePlaceholder'
import Lightbox from '../components/Lightbox/Lightbox'
import { dayDates, dayPhotos } from '../data/gallery'
import './GalleryDayPage.css'

const photosPerPage = 15

function GalleryDayPage() {
  const { day } = useParams()
  const date = dayDates[day] || day
  const photos = dayPhotos[day] || []
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [page, setPage] = useState(1)
  const gridRef = useRef(null)

  const totalPages = Math.ceil(photos.length / photosPerPage)
  const start = (page - 1) * photosPerPage
  const visiblePhotos = photos.slice(start, start + photosPerPage)

  const goToPage = (nextPage) => {
    setPage(nextPage)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <SectionPage title={date} backTo="/gallery" backLabel="В галерею">
      {photos.length > 0 ? (
        <>
          <ul className="gallery-day__grid" ref={gridRef}>
            {visiblePhotos.map((src, index) => (
              <li key={src} className="gallery-day__item">
                <button
                  type="button"
                  className="gallery-day__link"
                  onClick={() => setLightboxIndex(start + index)}
                  aria-label={`Открыть фото ${start + index + 1} — ${date}`}
                >
                  <img
                    src={src}
                    alt={`Фото ${start + index + 1} — ${date}`}
                    className="gallery-day__image"
                    loading="lazy"
                  />
                </button>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav className="gallery-day__pagination" aria-label="Страницы фото">
              <button
                type="button"
                className="gallery-day__page-btn"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
              >
                ‹ Назад
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    type="button"
                    className={`gallery-day__page-btn${
                      num === page ? ' gallery-day__page-btn--active' : ''
                    }`}
                    onClick={() => goToPage(num)}
                    aria-current={num === page ? 'page' : undefined}
                  >
                    {num}
                  </button>
                ),
              )}
              <button
                type="button"
                className="gallery-day__page-btn"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
              >
                Вперёд ›
              </button>
            </nav>
          )}
        </>
      ) : (
        <PagePlaceholder message="Фотографии появятся здесь позже." />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          initialIndex={lightboxIndex}
          alt={`Фото — ${date}`}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </SectionPage>
  )
}

export default GalleryDayPage
