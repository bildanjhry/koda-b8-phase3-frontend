import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'

import Landing from "./pages/Landing.jsx"
import Login from "./pages/auth/Login.jsx"
import Register from './pages/auth/Register.jsx'
import MainLayout from './components/Layouts/MainLayout.jsx'
import Features from './components/ui/Features.jsx'
import MyLinks from './pages/MyLinks.jsx'
import NotFound from "./pages/NotFound.jsx"
import CreateLink from './pages/CreateLink.jsx'
import Profile from "./pages/Profile.jsx"
import Protected from './routes/Protected.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout/>,
    children:[{
      index:true,
      element: <Landing/>
    },
    {
      path:"my-links",
      element: (
        <Protected>
          <MyLinks/>
        </Protected>
        )
    },
    {
      path:"create-link",
      element: (
        <Protected>
          <CreateLink/>
        </Protected>
      )
    },
    {
      path:"profile",
      element: (
        <Protected>
          <Profile/>
        </Protected>
      )
    },
    ]
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"*",
    element: <NotFound/>
  }
])

function App() {

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </PersistGate>
  )
}

export default App
