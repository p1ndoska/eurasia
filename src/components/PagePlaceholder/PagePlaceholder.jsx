import './PagePlaceholder.css'

function PagePlaceholder({ message = 'Раздел находится в разработке.' }) {
  return (
    <div className="page-placeholder" role="status">
      <div className="page-placeholder__icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="12"
            y="8"
            width="40"
            height="48"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 22h20M22 32h20M22 42h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="page-placeholder__message">{message}</p>
    </div>
  )
}

export default PagePlaceholder
