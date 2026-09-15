import { useParams } from 'react-router-dom'
import SectionPage from '../components/SectionPage/SectionPage'
import PagePlaceholder from '../components/PagePlaceholder/PagePlaceholder'

const dayDates = {
  15: '15 сентября',
  16: '16 сентября',
  17: '17 сентября',
}

function GalleryDayPage() {
  const { day } = useParams()
  const date = dayDates[day] || day

  return (
    <SectionPage title={date} backTo="/gallery" backLabel="В галерею">
      <PagePlaceholder message="Фотографии появятся здесь позже." />
    </SectionPage>
  )
}

export default GalleryDayPage
