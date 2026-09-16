export const dayDates = {
  15: '15 сентября',
  16: '16 сентября',
  17: '17 сентября',
}

export const dayPhotos = Object.entries(
  import.meta.glob('../images/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .reduce((acc, [path, mod]) => {
    const day = path.split('/images/gallery/')[1]?.split('/')[0]
    if (day) {
      ;(acc[day] ||= []).push(mod.default)
    }
    return acc
  }, {})
