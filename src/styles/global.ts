import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0,
    boxSizing: "border-box"
  },

  'body': {
    backgroundColor: '$dark',
    color: '#ffffff',
    fontFamily: '"Roboto", sans-serif'
  }
})

