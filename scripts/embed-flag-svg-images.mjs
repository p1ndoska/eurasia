import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const flagsDir = path.resolve(__dirname, '../src/images/flag')

function embedSvgImages(svgPath) {
  const svg = fs.readFileSync(svgPath, 'utf8')

  if (svg.includes('data:image/png;base64')) {
    return { changed: false, reason: 'already embedded' }
  }

  const match = svg.match(/xlink:href="([^"]+\.png)"/i)
  if (!match) {
    return { changed: false, reason: 'no external png reference' }
  }

  const relativePath = match[1].replace(/\\/g, '/')
  const pngPath = path.resolve(path.dirname(svgPath), relativePath)

  if (!fs.existsSync(pngPath)) {
    return {
      changed: false,
      reason: `png not found: ${pngPath}`,
    }
  }

  const base64 = fs.readFileSync(pngPath).toString('base64')
  const updated = svg.replace(
    match[0],
    `xlink:href="data:image/png;base64,${base64}"`,
  )

  fs.writeFileSync(svgPath, updated)
  return { changed: true }
}

const files = fs.readdirSync(flagsDir).filter((name) => name.endsWith('.svg'))

for (const file of files) {
  const result = embedSvgImages(path.join(flagsDir, file))

  if (result.changed) {
    console.log(`embedded: ${file}`)
  } else {
    console.log(`skipped: ${file} (${result.reason})`)
  }
}
