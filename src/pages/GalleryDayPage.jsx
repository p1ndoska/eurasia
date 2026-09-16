import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionPage from '../components/SectionPage/SectionPage'
import PagePlaceholder from '../components/PagePlaceholder/PagePlaceholder'
import Lightbox from '../components/Lightbox/Lightbox'
import { dayDates, dayPhotos } from '../data/gallery'
import './GalleryDayPage.css'

function GalleryDayPage() {
  const { day } = useParams()
  const date = dayDates[day] || day
  const photos = dayPhotos[day] || []
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <SectionPage title={date} backTo="/gallery" backLabel="В галерею">
      {photos.length > 0 ? (
        <ul className="gallery-day__grid">
          {photos.map((src, index) => (
            <li key={src} className="gallery-day__item">
              <button
                type="button"
                className="gallery-day__link"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Открыть фото ${index + 1} — ${date}`}
              >
                <img
                  src={src}
                  alt={`Фото ${index + 1} — ${date}`}
                  className="gallery-day__image"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
        </ul>
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
