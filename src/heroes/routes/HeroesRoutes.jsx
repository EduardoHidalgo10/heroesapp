import React from 'react'
import { Navbar } from '../../NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '../pages/MarvelPage'
import DcPage from '../pages/DcPage'
import SearchPage from '../pages/SearchPage'
import HeroPage from '../pages/HeroPage'

const HeroesRoutes = () => {

  return (
    <>
      <Navbar/>

    <div className='container'>
      <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DcPage/>}/>

            <Route path='search' element={<SearchPage/>}/>
            <Route path='hero/:id' element={<HeroPage/>}/>

            {/* Search , herobyid */}
           
            <Route path='/' element={<Navigate to="/marvel"/>}/>    
  
        </Routes>    
    </div>
    </>
  )
}

export default HeroesRoutes
