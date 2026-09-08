import sponsors from '../images/noun_Handshake_8472106.png'
import evrasia from '../images/evrasia.jpg'
import evropa from '../images/evropa.jpg'
import program from '../images/program.jpg'
import galery from '../images/galery.svg'
import contacts from '../images/contacts.svg';

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
    image: evrasia,
    imageAlt: 'Участники',
  },
  {
    title: 'Гостиница Европа',
    href: 'https://www.hoteleurope.by/',
    image: evropa,
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
    image: galery,
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
