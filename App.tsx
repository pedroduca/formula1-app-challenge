import { StatusBar } from 'expo-status-bar'

import Racing from './src/screens/Racing/Racing'

import { theme } from './src/theme/theme'
import { ThemeProvider } from 'styled-components'

import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' backgroundColor='#fff' />
      <Racing />
    </ThemeProvider>
  )
}
