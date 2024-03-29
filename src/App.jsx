import React from "react"
import AppRouter from "./routers/AppRouter"
import AuthProvider from "./auth/context/AuthProvider"




function App() {
  
  return (
    <AuthProvider>

      <AppRouter/>
      
    </AuthProvider>
    
  )
}

export default App
