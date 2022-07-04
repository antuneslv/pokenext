import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      dark: '#1e1e1e'
    }
  },
  media: {
    bp1: '(min-width: 480px)'
  }
})