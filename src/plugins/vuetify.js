// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'meTheme',
    themes: {
      meTheme: {
        dark: false,
        colors: {
          primary: '#196D7C',
          'primary-darken-1': '#095D6C',
          secondary: '#03DAC6',
          'secondary-darken-1': '#018786',
        }
      }
    }
  }
})
