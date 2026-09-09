import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  COOKIE_CATEGORIES,
  DEFAULT_CONSENT,
  hasConsent,
  loadConsent,
  saveConsent,
} from '../utils/cookieConsent'
import { disableMatomo, initMatomo } from '../utils/matomo'

const CookieConsentContext = createContext(null)

function applyMatomoConsent(consent) {
  if (hasConsent(COOKIE_CATEGORIES.matomo, consent)) {
    initMatomo()
  } else {
    disableMatomo()
  }
}

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(() => loadConsent())
  const [bannerOpen, setBannerOpen] = useState(() => !loadConsent().decided)

  useEffect(() => {
    if (consent.decided) {
      applyMatomoConsent(consent)
    }
  }, [consent])

  const persistConsent = useCallback((nextConsent) => {
    const saved = saveConsent(nextConsent)
    setConsent(saved)
    setBannerOpen(false)
    applyMatomoConsent(saved)
    return saved
  }, [])

  const acceptAll = useCallback(() => {
    persistConsent({
      [COOKIE_CATEGORIES.accessibility]: true,
      [COOKIE_CATEGORIES.language]: true,
      [COOKIE_CATEGORIES.matomo]: true,
      decided: true,
    })
  }, [persistConsent])

  const rejectAll = useCallback(() => {
    persistConsent({
      [COOKIE_CATEGORIES.accessibility]: false,
      [COOKIE_CATEGORIES.language]: false,
      [COOKIE_CATEGORIES.matomo]: false,
      decided: true,
    })
  }, [persistConsent])

  const savePreferences = useCallback(
    (preferences) => {
      persistConsent({
        ...DEFAULT_CONSENT,
        ...preferences,
        decided: true,
      })
    },
    [persistConsent],
  )

  const openBanner = useCallback(() => setBannerOpen(true), [])

  const value = useMemo(
    () => ({
      consent,
      bannerOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openBanner,
      hasCategoryConsent: (category) => hasConsent(category, consent),
    }),
    [consent, bannerOpen, acceptAll, rejectAll, savePreferences, openBanner],
  )

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)

  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider')
  }

  return context
}
