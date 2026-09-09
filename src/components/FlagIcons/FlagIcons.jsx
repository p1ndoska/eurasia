import RoundIcon from '../RoundIcon/RoundIcon'
import azerbaijan from '../../images/flag/Азербайджан.svg'
import armenia from '../../images/flag/Армения.svg'
import belarus from '../../images/flag/Беларусь.svg'
import kazakhstan from '../../images/flag/Казахстан.svg'
import kyrgyzstan from '../../images/flag/Кыргызстан.svg'
import russia from '../../images/flag/Россия.svg'
import tajikistan from '../../images/flag/Таджикистан.svg'
import uzbekistan from '../../images/flag/Узбекистан.svg'
import './FlagIcons.css'

const flags = [
  { src: azerbaijan, alt: 'Азербайджан', href: 'https://caa.gov.az/' },
  { src: armenia, alt: 'Армения', href: 'https://www.armats.am/' },
  { src: belarus, alt: 'Беларусь', cropScale: 1.12, href: 'https://www.ban.by/' },
  { src: kazakhstan, alt: 'Казахстан', href: 'https://www.ans.kz/ru/' },
  { src: kyrgyzstan, alt: 'Кыргызстан', href: 'https://ansp.kg/' },
  { src: russia, alt: 'Россия', href: 'https://ovdrf.ru/page/175' },
  { src: tajikistan, alt: 'Таджикистан', href: 'https://www.airnav.tj/ru/' },
  { src: uzbekistan, alt: 'Узбекистан', href: 'https://uzaeronavigation.com/' },
]

function FlagIcons() {
  return (
    <ul className="flag-icons">
      {flags.map(({ src, alt, cropScale, href }) => (
        <li key={alt} className="flag-icons__item">
          <RoundIcon src={src} alt={alt} cropScale={cropScale} href={href} />
        </li>
      ))}
    </ul>
  )
}

export default FlagIcons
