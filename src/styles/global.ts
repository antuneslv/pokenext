import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'pokemon-solid',
    src: 'local("pokemon-solid"), url("../fonts/pokemon-solid.woff")'
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$dark'
  },

  button: {
    fontSize: 'inherit'
  },

  'body, button, a': {
    color: '#fff',
    fontFamily: '"Roboto", sans-serif'
  }
})
