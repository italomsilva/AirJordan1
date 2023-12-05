import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Conteiner from './routes/Conteiner.jsx'
import Contact from './routes/Contact.jsx'
import PagCompras from './routes/PagCompras.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "",
        element: <Conteiner/>,
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ],
  },
  {
    path: "/comprar:aj1",
    element: <PagCompras/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>,
)
