import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


const AppRouter = () => {
  return (
    <>
        <Routes>

    {/* Public Routes */}
         <Route path='login' element={
         <PublicRoute>
              <Login/>
         </PublicRoute>}>
         </Route>
    {/* Public Routes */}





      {/* private route */}
            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>}>
            </Route>
      {/* private route */}


        </Routes>      
    </>
  )
}

export default AppRouter
