import { useEffect, useState } from 'react'
import { COOKIE_CATEGORIES } from '../../utils/cookieConsent'
import { useCookieConsent } from '../../context/CookieConsentContext'
import './CookieConsent.css'

const CATEGORIES = [
  {
    id: COOKIE_CATEGORIES.accessibility,
    label: 'Версия для слабовидящих',
    type: 'функциональные',
  },
  {
    id: COOKIE_CATEGORIES.language,
    label: 'Языковые предпочтения',
    type: 'функциональные',
  },
  {
    id: COOKIE_CATEGORIES.matomo,
    label: 'Matomo',
    type: 'статистические',
  },
]

function CookieConsent() {
  const { bannerOpen, acceptAll, rejectAll, savePreferences, consent } =
    useCookieConsent()
  const [expanded, setExpanded] = useState(false)
  const [draft, setDraft] = useState({
    [COOKIE_CATEGORIES.accessibility]: consent.accessibility,
    [COOKIE_CATEGORIES.language]: consent.language,
    [COOKIE_CATEGORIES.matomo]: consent.matomo,
  })

  useEffect(() => {
    if (bannerOpen) {
      setDraft({
        [COOKIE_CATEGORIES.accessibility]: consent.accessibility,
        [COOKIE_CATEGORIES.language]: consent.language,
        [COOKIE_CATEGORIES.matomo]: consent.matomo,
      })
    }
  }, [bannerOpen, consent])

  if (!bannerOpen) return null

  const setCategory = (id, value) => {
    setDraft((current) => ({ ...current, [id]: value }))
  }

  const handleSave = () => {
    savePreferences(draft)
  }

  return (
    <div
      className={`cookie-consent${expanded ? ' cookie-consent--expanded' : ''}`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-modal="false"
    >
      <div className="cookie-consent__panel">
        <div className="cookie-consent__header">
          <p id="cookie-consent-title" className="cookie-consent__title">
            Использование cookie
          </p>
          <p id="cookie-consent-description" className="cookie-consent__lead">
            {expanded
              ? 'Выберите, какие cookie разрешить:'
              : 'На сайте используются функциональные и статистические cookie.'}
          </p>
        </div>

        {expanded && (
          <ul className="cookie-consent__categories">
            {CATEGORIES.map(({ id, label, type }) => (
              <li key={id} className="cookie-consent__category">
                <div className="cookie-consent__category-info">
                  <span className="cookie-consent__category-name">{label}</span>
                  <span className="cookie-consent__category-type">{type}</span>
                </div>
                <div className="cookie-consent__category-actions">
                  <button
                    type="button"
                    className={`cookie-consent__btn cookie-consent__btn--choice${
                      draft[id] ? ' cookie-consent__btn--active' : ''
                    }`}
                    onClick={() => setCategory(id, true)}
                  >
                    Принять
                  </button>
                  <button
                    type="button"
                    className={`cookie-consent__btn cookie-consent__btn--choice${
                      !draft[id] ? ' cookie-consent__btn--active' : ''
                    }`}
                    onClick={() => setCategory(id, false)}
                  >
                    Отклонить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cookie-consent__actions">
          {!expanded && (
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--secondary"
              onClick={() => setExpanded(true)}
            >
              Настройки
            </button>
          )}
          {expanded && (
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--secondary"
              onClick={handleSave}
            >
              Сохранить
            </button>
          )}
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--primary"
            onClick={acceptAll}
          >
            Принять все
          </button>
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--ghost"
            onClick={rejectAll}
          >
            Отклонить все
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
