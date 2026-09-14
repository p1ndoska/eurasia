import SectionPage from '../components/SectionPage/SectionPage'
import '../components/Contacts/Contacts.css'

const contacts = [
  { name: 'Елизавета Меликян', phone: '+375 29 693 28 07' },
  { name: 'Татьяна Поночевная', phone: '+375 29 622 59 03' },
]

function ContactsPage() {
  return (
    <SectionPage title="Контакты">
      <ul className="contacts-list">
        {contacts.map(({ name, phone }) => (
          <li className="contacts-list__item" key={phone}>
            <span className="contacts-list__name">{name}</span>
            <a
              className="contacts-list__phone"
              href={`tel:${phone.replaceAll(' ', '')}`}
            >
              {phone}
            </a>
          </li>
        ))}
      </ul>
    </SectionPage>
  )
}

export default ContactsPage
