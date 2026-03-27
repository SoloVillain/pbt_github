import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProfileAkbar from './pages/ProfileAkbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/akbar" element={<ProfileAkbar />} />
      </Routes>
    </Router>
  )
}

export default App