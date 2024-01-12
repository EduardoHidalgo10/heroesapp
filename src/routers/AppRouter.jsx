import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'


const AppRouter = () => {
  return (
    <>
        <Routes>
         
            <Route path='login' element={<Login/>}/>  


            <Route path='/*' element={<HeroesRoutes/>}/>  

        </Routes>      
    </>
  )
}

export default AppRouter
