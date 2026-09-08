import program from '../images/icons/4544845-business-comerce-delivery-list-shop_121445.svg'
import participants from '../images/icons/people_group_icon_188185.svg'
import hotel from '../images/icons/company_workplace_building_office_icon_262568.svg'
import sponsors from '../images/icons/cooperation_greeting_partnership_deal_agreement_handshake_icon_262591.svg'
import gallery from '../images/icons/mbriimagegallery_99572.svg'
import contacts from '../images/icons/person_avatar_account_user_icon_191606.svg'

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
