import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Conteiner from './routes/Conteiner.jsx'
import Contact from './routes/Contato/Contact.jsx'
import PgComp_AirJordan from './routes/PgComprar/AirJordan1/PgComp_Airjordan.jsx'
import PaginaDeCompras from './components/PagCompras/PaginaDeCompras.jsx'
import PgComp_Relacionados from './routes/PgComprar/Relacionados/PgComp_Relacionados.jsx'
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
        path: "comprarAj1",
        element: <PaginaDeCompras child={(<PgComp_AirJordan />)} />,
      },
      {
        path: "comprar/:index",
        element: <PaginaDeCompras child={(<PgComp_Relacionados/>)}/>
      }
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
