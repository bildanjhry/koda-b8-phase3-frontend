import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"

import Landing from "./pages/Landing.jsx"
import Login from "./pages/auth/Login.jsx"
import Register from './pages/auth/Register.jsx'
import MainLayout from './components/Layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout/>,
    children:[{
      index:true,
      element: <Landing/>
    }]
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
