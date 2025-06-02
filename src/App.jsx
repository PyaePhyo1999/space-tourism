import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx'
import Destination from '../src/components/Destination/Destination.jsx'
import Crew from './components/Crew/Crew.jsx';
import Technology from './components/Technology/Technology.jsx';

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/destination' element={<Destination/>} />
            <Route path='/crew' element={<Crew/>} />
            <Route path='/technology' element={<Technology/>} />
        </Routes>
    </Router>
  )
}

export default App
