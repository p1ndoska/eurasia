import program from '../images/icons/program-checklist.png'
import participants from '../images/icons/people_group_icon_188185.svg'
import hotel from '../images/icons/company_workplace_building_office_icon_262568.svg'
import sponsors from '../images/icons/sponsors-handshake.png'
import gallery from '../images/icons/mbriimagegallery_99572.svg'
import contacts from '../images/icons/contacts-person.png'

const homeCards = [
  {
    title: 'Программа',
    to: '/program',
    image: program,
    imageAlt: 'Программа',
  },
  {
    title: 'Участники',
    to: '/participants',
    image: participants,
    imageAlt: 'Участники',
  },
  {
    title: 'Гостиница Европа',
    href: 'https://www.hoteleurope.by/',
    image: hotel,
    imageAlt: 'Гостиница Европа',
  },
  {
    title: 'Спонсоры',
    to: '/sponsors',
    image: sponsors,
    imageAlt: 'Спонсоры',
  },
  {
    title: 'Фотогалерея',
    to: '/gallery',
    image: gallery,
    imageAlt: 'Фотогалерея',
  },
  {
    title: 'Контакты',
    to: '/contacts',
    image: contacts,
    imageAlt: 'Контакты',
  },
]

export default homeCards
