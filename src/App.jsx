import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Services from './pages/Services'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App