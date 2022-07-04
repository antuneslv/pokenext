import { styled } from '@stitches/react'

export const Container = styled('div', {
  textAlign: 'center',

  h1: {
  fontSize: '2.5em',
  textTransform: 'capitalize',
  padding: '12px',
  margin: '32px auto',
  width: '200px',
}

})

export const NumberContainer = styled('div', {
  margin: '32px',
  p: {
  margin: '12px auto',
  fontSize: '20px',
}
})

export const TypeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  marginBottom: '40px'
})

export const Type = styled('span', {
  display: 'inline-block',
  width: '80px',
  padding: '8px 12px',
  backgroundColor: '#000',
  border: '1px solid #ccc',
  borderRadius: '6px',
  textTransform: 'uppercase',
  fontSize: '12px',

  '& + span': {
    marginLeft: '8px',
  },

  variants: {
    BackgroundColor: {
      normal: {
        backgroundColor: '#aa9',
      },

      fire: {
        backgroundColor: '#f42',
      },

      water: {
        backgroundColor: '#39f',
      },

      electric: {
        backgroundColor: '#fc3',
      },

      grass: {
        backgroundColor: '#7c5',
      },

      ice: {
        backgroundColor: '#6cf',
      },

      fighting: {
        backgroundColor: '#b54',
      },

      poison: {
        backgroundColor: '#a59',
      },

      ground: {
        backgroundColor: '#db5',
      },

      flying: {
        backgroundColor: '#89f',
      },

      psychic: {
        backgroundColor: '#f59',
      },

      bug: {
        backgroundColor: '#ab2',
      },

      rock: {
        backgroundColor: '#ba6',
      },

      ghost: {
        backgroundColor: '#66b',
      },

      dragon: {
        backgroundColor: '#76e',
      },

      dark: {
        backgroundColor: '#754',
      },

      steel: {
        backgroundColor: '#aab',
      },

      fairy: {
        backgroundColor: '#e9e',
      }
    }
  }
})

export const DataContainer = styled('div', {
  width: '160px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between'
})

export const HightContainer = styled('div', {
  paddingRight: '24px',
  borderRight: '1px solid #ccc',
})
