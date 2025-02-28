import { Route, Routes } from 'react-router'
import './App.css'
import Juego from './views/Juego'
import Jugadores from './views/Jugadores'

function App() {

  return (
    <Routes>
      <Route index element={<Jugadores/>} />
      <Route path="juego" element={<Juego />} />
    </Routes>
  )
}

export default App
