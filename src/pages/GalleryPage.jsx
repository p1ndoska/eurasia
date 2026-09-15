import SectionPage from '../components/SectionPage/SectionPage'
import SponsorCard from '../components/SponsorCard/SponsorCard'
import galleryIcon from '../images/icons/mbriimagegallery_99572.svg'
import './GalleryPage.css'

const galleryDays = [
  { date: '15 сентября', to: '/gallery/15' },
  { date: '16 сентября', to: '/gallery/16' },
  { date: '17 сентября', to: '/gallery/17' },
]

function GalleryPage() {
  return (
    <SectionPage title="Фотогалерея">
      <ul className="section-page__grid">
        {galleryDays.map((day) => (
          <li key={day.to} className="section-page__grid-item">
            <SponsorCard
              image={galleryIcon}
              imageAlt={day.date}
              caption={day.date}
              to={day.to}
              className="gallery-card"
            />
          </li>
        ))}
      </ul>
    </SectionPage>
  )
}

export default GalleryPage
