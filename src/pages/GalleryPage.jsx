import SectionPage from '../components/SectionPage/SectionPage'
import SponsorCard from '../components/SponsorCard/SponsorCard'
import galleryIcon from '../images/noun_galery_7448454.svg'

const galleryDays = ['15 сентября', '16 сентября', '17 сентября']

function GalleryPage() {
  return (
    <SectionPage title="Фотогалерея">
      <ul className="section-page__grid">
        {galleryDays.map((day) => (
          <li key={day} className="section-page__grid-item">
            <SponsorCard image={galleryIcon} imageAlt={day} caption={day} />
          </li>
        ))}
      </ul>
    </SectionPage>
  )
}

export default GalleryPage
