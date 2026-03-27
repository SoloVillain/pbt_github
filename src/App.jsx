import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProfileAkbar from './pages/ProfileAkbar'
import ProfileRidhwan from './pages/ProfileRidhwan'
import ProfileCalvin from './pages/ProfileCalvin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/akbar" element={<ProfileAkbar />} />
         <Route path="/ridhwan" element={<ProfileRidhwan />} />
        <Route path="/calvin" element={<ProfileCalvin />} />
      </Routes>
    </Router>
  )
}

export default App