import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import {Auth } from './pages/Auth/index'
import { MainPage } from './pages/MainPage/index'
import { Login } from './pages/LoginIn'

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
