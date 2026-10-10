import { useState } from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import AskPage from './pages/AskPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MusicPage from './pages/MusicPage.jsx'
import CoffeePage from './pages/CoffeePage.jsx'
import LilyPage from './pages/LilyPage.jsx'
import DoctorPage from './pages/DoctorPage.jsx'
import FinalPage from './pages/FinalPage.jsx'

const SAID_YES_KEY = 'saidYes'

// /home, its pages and /final stay locked until Yes has been clicked on /ask
function RequireYes({ saidYes }) {
  return saidYes ? <Outlet /> : <Navigate to="/ask" replace />
}

function App() {
  // Remembered for the browser tab, so refreshing a page doesn't send them back to /ask
  const [saidYes, setSaidYes] = useState(
    () => sessionStorage.getItem(SAID_YES_KEY) === 'true',
  )
  const navigate = useNavigate()

  const handleYes = () => {
    sessionStorage.setItem(SAID_YES_KEY, 'true')
    setSaidYes(true)
    navigate('/home')
  }

  return (
    <Routes>
      <Route path="/ask" element={<AskPage onYes={handleYes} />} />
      <Route element={<RequireYes saidYes={saidYes} />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/music" element={<MusicPage />} />
        <Route path="/home/coffee" element={<CoffeePage />} />
        <Route path="/home/lily" element={<LilyPage />} />
        <Route path="/home/doctor" element={<DoctorPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/ask" replace />} />
    </Routes>
  )
}

export default App
