import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { MapLibre } from './pages/MapLibre'

const App: React.FC = _props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<MapLibre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
