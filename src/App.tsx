import React from 'react';
import './shared/css/global.css'
import { Routes } from './routes/Routes'
import { DesktopNavigation } from './components/navigation/desktopnavigation/DesktopNavigation'

function App() {
  return (
    <Routes>
        <DesktopNavigation />
    </Routes>
  )
}

export default App;
