export const COOKIE_CONSENT_KEY = 'eurasia-cookie-consent'

export const COOKIE_CATEGORIES = {
  accessibility: 'accessibility',
  language: 'language',
  matomo: 'matomo',
}

export const DEFAULT_CONSENT = {
  [COOKIE_CATEGORIES.accessibility]: false,
  [COOKIE_CATEGORIES.language]: false,
  [COOKIE_CATEGORIES.matomo]: false,
  decided: false,
}

export function loadConsent() {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) return { ...DEFAULT_CONSENT }

    const parsed = JSON.parse(stored)
    return {
      ...DEFAULT_CONSENT,
      ...parsed,
      decided: Boolean(parsed.decided),
    }
  } catch {
    return { ...DEFAULT_CONSENT }
  }
}

export function saveConsent(consent) {
  const payload = {
    ...consent,
    decided: true,
    updatedAt: new Date().toISOString(),
  }

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload))
  return payload
}

export function hasConsent(category, consent) {
  return Boolean(consent?.[category])
}
