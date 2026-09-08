import '../../styles/data-table.css'
import './ParticipantsTable.css'

function ParticipantsTable({ title, participants }) {
  const sectionId = `participants-${title.replace(/\s+/g, '-')}`

  return (
    <section className="participants-table" aria-labelledby={sectionId}>
      <h2 className="participants-table__title" id={sectionId}>
        {title}
      </h2>

      <div className="data-table__scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th scope="col">Организация</th>
              <th scope="col">ФИО</th>
              <th scope="col">Должность</th>
            </tr>
          </thead>
          <tbody>
            {participants.map(
              ({ organization, name, position }, index) => (
                <tr key={`${organization}-${name}-${index}`}>
                  <td>{organization}</td>
                  <td>{name}</td>
                  <td>{position}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ParticipantsTable
