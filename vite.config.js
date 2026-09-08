import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function embedFlagSvgImages() {
  return {
    name: 'embed-flag-svg-images',
    transform(code, id) {
      if (!id.includes(`${path.sep}images${path.sep}flag${path.sep}`)) {
        return null
      }

      if (!id.endsWith('.svg') || code.includes('data:image/png;base64')) {
        return null
      }

      const match = code.match(/xlink:href="([^"]+\.png)"/i)
      if (!match) {
        return null
      }

      const relativePath = match[1].replace(/\\/g, '/')
      const pngPath = path.resolve(path.dirname(id), relativePath)

      if (!fs.existsSync(pngPath)) {
        this.warn(
          `[embed-flag-svg-images] PNG not found for ${path.basename(id)}: ${pngPath}`,
        )
        return null
      }

      const base64 = fs.readFileSync(pngPath).toString('base64')
      const updated = code.replace(
        match[0],
        `xlink:href="data:image/png;base64,${base64}"`,
      )

      return {
        code: updated,
        map: null,
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), embedFlagSvgImages()],
})
