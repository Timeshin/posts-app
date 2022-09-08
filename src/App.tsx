import { Route, Routes } from 'react-router'
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"

import { GlobalStyles, AuthLayout } from './components'
import { AuthPage, Posts } from './routes/routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route index element={<Posts />} />
        <Route path='autorization' element={<AuthPage />} />
      </Route>
    </Routes>
  </ThemeProvider>
)

export default App
