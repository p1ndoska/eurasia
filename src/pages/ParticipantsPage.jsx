import SectionPage from '../components/SectionPage/SectionPage'
import ParticipantsTable from '../components/ParticipantsTable/ParticipantsTable'
import { anoProviders, organizations } from '../data/participants'
import './ParticipantsPage.css'

function ParticipantsPage() {
  return (
    <SectionPage title="Участники">
      <div className="participants-page">
        <ParticipantsTable title="Провайдеры АНО" participants={anoProviders} />
        <ParticipantsTable title="Организации" participants={organizations} />
      </div>
    </SectionPage>
  )
}

export default ParticipantsPage
