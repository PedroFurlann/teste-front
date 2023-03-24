import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Users } from './pages/Users'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Users />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
