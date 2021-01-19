import React from 'react';
import { Greeting } from './components/greeting/Greeting'
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
