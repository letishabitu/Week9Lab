import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Home  from './Pages/Home'
import About from './Pages/About'
import NasaList from './Pages/NasaList'
import Nav from './components/Nav'



import { Route, Routes } from 'react-router-dom';
// import my page components


function App() {
  

  return (
  
      <div className="App">
        
         <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nassalist' element={<NasaList/>} />
        <Route path='/about/' element={<About/>} />

      </Routes>
      </div>
     
  )
}

export default App
