import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Theme from './pages/Theme'
import Extensions from './pages/Extensions'
import Pricing from './pages/Pricing'
import About from './pages/About'


function App() {
 

  return (
  

    
      <div className='bg-slate h-screen ' >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/theme' element={<Theme/>}/>
          <Route path='/extensions' element={<Extensions/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
       
      </div>
    
  )
}

export default App
