import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './App.css'
import Causes from './pages/Causes.jsx'
import Shop from './pages/Shop.jsx'
import Events from './pages/Events.jsx'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/causes' element={<Causes/ >}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/shop' element={<Shop/>}/>
    </Routes>
  )
}

export default App
