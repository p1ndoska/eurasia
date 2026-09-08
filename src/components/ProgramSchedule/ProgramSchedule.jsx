import '../../styles/data-table.css'
import './ProgramSchedule.css'

function renderLines(value) {
  if (!value) return null

  const lines = Array.isArray(value) ? value : [value]

  return lines.map((line, index) => (
    <span key={index} className="data-table__line">
      {line}
    </span>
  ))
}

function ProgramDayTable({ date, items }) {
  return (
    <div className="data-table__scroll">
      <table className="data-table program-schedule__table">
        <tbody>
          <tr className="data-table__head-row">
            <td colSpan={3}>{date}</td>
          </tr>
          {items.map((item, index) => (
            <tr key={`${item.time}-${index}`}>
              <td className="data-table__accent program-schedule__time">
                {item.time}
              </td>
              <td className="program-schedule__event">
                {renderLines(item.event)}
              </td>
              {!item.skipParticipant && (
                <td
                  className="program-schedule__participant"
                  rowSpan={item.participantRowspan || 1}
                >
                  {renderLines(item.participant)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProgramSchedule({ days }) {
  return (
    <div className="program-schedule">
      {days.map(({ date, items }) => (
        <ProgramDayTable key={date} date={date} items={items} />
      ))}
    </div>
  )
}

export default ProgramSchedule
