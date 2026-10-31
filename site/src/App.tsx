import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Proposta from './pages/Proposta'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposta" element={<Proposta />} />
      </Routes>
    </BrowserRouter>
  )
}
