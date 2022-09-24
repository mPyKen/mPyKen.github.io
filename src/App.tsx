import { HashRouter, Route, Routes } from 'react-router-dom'

import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { MapLibre } from './pages/MapLibre'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App: React.FC = _props => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<MapLibre />} />
      </Routes>
    </HashRouter>
  )
}

export default App
