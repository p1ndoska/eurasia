const MATOMO_URL = import.meta.env.VITE_MATOMO_URL
const MATOMO_SITE_ID = import.meta.env.VITE_MATOMO_SITE_ID

let initialized = false

export function initMatomo() {
  if (initialized || !MATOMO_URL || !MATOMO_SITE_ID) return

  window._paq = window._paq || []
  window._paq.push(['trackPageView'])
  window._paq.push(['enableLinkTracking'])

  const script = document.createElement('script')
  script.async = true
  script.src = `${MATOMO_URL.replace(/\/$/, '')}/matomo.js`

  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode.insertBefore(script, firstScript)

  window._paq.push(['setTrackerUrl', `${MATOMO_URL.replace(/\/$/, '')}/matomo.php`])
  window._paq.push(['setSiteId', MATOMO_SITE_ID])

  initialized = true
}

export function disableMatomo() {
  window._paq = window._paq || []
  window._paq.push(['optUserOut'])
}
