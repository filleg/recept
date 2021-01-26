import React from 'react';
import './shared/css/global.css'
import { Routes } from './routes/Routes'
import { UserProvider } from './shared/provider/UserProvider'
import { DesktopNavigation } from './components/navigation/desktopnavigation/DesktopNavigation'

function App() {
  return (
    <UserProvider>
    <Routes>
        <DesktopNavigation />
    </Routes>
    </UserProvider>
  )
}

export default App;
