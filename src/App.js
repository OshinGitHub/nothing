import './App.css'
import TodoApp from './TodoApp'
import HomePage from './HomePage'
import MusicStore from './MusicStore'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TodoApp" element={<TodoApp />} />
          <Route path="/MusicStore" element={<MusicStore />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
