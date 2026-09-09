import SectionPage from '../components/SectionPage/SectionPage'
import ProgramSchedule from '../components/ProgramSchedule/ProgramSchedule'
import { programDays } from '../data/program'
import './ProgramPage.css'

function ProgramPage() {
  return (
    <SectionPage title="Программа">
      <ProgramSchedule days={programDays} />
    </SectionPage>
  )
}

export default ProgramPage
