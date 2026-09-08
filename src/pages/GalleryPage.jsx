import SectionPage from '../components/SectionPage/SectionPage'
import PagePlaceholder from '../components/PagePlaceholder/PagePlaceholder'
import SponsorCard from '../components/SponsorCard/SponsorCard'

const galleryImages = Object.entries(
  import.meta.glob('../images/gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
    eager: true,
    import: 'default',
  }),
)
  .map(([path, src]) => ({
    src,
    caption: formatCaption(path),
  }))
  .sort((a, b) => a.caption.localeCompare(b.caption, 'ru'))

function formatCaption(path) {
  const fileName = path.split('/').pop().replace(/\.[^.]+$/, '')

  return fileName
    .replace(/^\d+([_-]\d+)*/g, '')
    .replace(/^[_-]+/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() || fileName.replace(/[_-]+/g, ' ')
}

function GalleryPage() {
  return (
    <SectionPage title="Фотогалерея">
      {galleryImages.length > 0 ? (
        <ul className="section-page__grid">
          {galleryImages.map(({ src, caption }) => (
            <li key={src} className="section-page__grid-item">
              <SponsorCard image={src} imageAlt={caption} caption={caption} />
            </li>
          ))}
        </ul>
      ) : (
        <PagePlaceholder message="Фотографии совещания будут опубликованы позже." />
      )}
    </SectionPage>
  )
}

export default GalleryPage
