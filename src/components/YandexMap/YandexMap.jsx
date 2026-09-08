import './YandexMap.css'

const LON = 27.557034
const LAT = 53.902639
const ZOOM = 17

const MAP_LINK =
  `https://yandex.by/maps/157/minsk/?lang=ru&ll=${LON}%2C${LAT}&pt=${LON}%2C${LAT}%2Cpm2rdm&utm_medium=mapframe&utm_source=maps&z=${ZOOM}`

const MAP_IFRAME_SRC =
  `https://yandex.by/map-widget/v1/?lang=ru&ll=${LON}%2C${LAT}&pt=${LON}%2C${LAT}%2Cpm2rdm&z=${ZOOM}`

function YandexMap() {
  return (
    <section className="yandex-map" aria-label="Карта — Минск">
      <div className="yandex-map__wrapper">
        <a
          className="yandex-map__badge"
          href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Минск
        </a>
        <a
          className="yandex-map__badge yandex-map__badge--second"
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Яндекс Карты — транспорт, навигация, поиск мест
        </a>
        <iframe
          className="yandex-map__frame"
          src={MAP_IFRAME_SRC}
          title="Яндекс Карта — Минск"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default YandexMap
