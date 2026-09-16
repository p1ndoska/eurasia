import { useParams } from 'react-router-dom'
import SectionPage from '../components/SectionPage/SectionPage'
import PagePlaceholder from '../components/PagePlaceholder/PagePlaceholder'
import './GalleryDayPage.css'

const dayDates = {
  15: '15 сентября',
  16: '16 сентября',
  17: '17 сентября',
}

const dayPhotos = Object.entries(
  import.meta.glob('../images/gallery/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
    eager: true,
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .reduce((acc, [path, mod]) => {
    const day = path.split('/images/gallery/')[1]?.split('/')[0]
    if (day) {
      ;(acc[day] ||= []).push(mod.default)
    }
    return acc
  }, {})

function GalleryDayPage() {
  const { day } = useParams()
  const date = dayDates[day] || day
  const photos = dayPhotos[day] || []

  return (
    <SectionPage title={date} backTo="/gallery" backLabel="В галерею">
      {photos.length > 0 ? (
        <ul className="gallery-day__grid">
          {photos.map((src, index) => (
            <li key={src} className="gallery-day__item">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-day__link"
              >
                <img
                  src={src}
                  alt={`Фото ${index + 1} — ${date}`}
                  className="gallery-day__image"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <PagePlaceholder message="Фотографии появятся здесь позже." />
      )}
    </SectionPage>
  )
}

export default GalleryDayPage
