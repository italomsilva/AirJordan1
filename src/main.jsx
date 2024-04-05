import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, NavLink, RouterProvider, } from "react-router-dom"
import Conteiner from './routes/Conteiner.jsx'
import Contact from './routes/Contato/Contact.jsx'
import PagCompras from './routes/PagCompras/PagCompras.jsx'
import { TenisProvider } from './context/tenisContext.jsx'
import Error from './routes/Erro/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/Airjordan1",
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
      {
        path: "comprar",
        element: <PagCompras/>,
      },   
    ],
  },
  {
    path: "*",
    element: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TenisProvider>
      <RouterProvider router={router} />
    </TenisProvider>
  </React.StrictMode>,
)
