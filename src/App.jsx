import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"


import { Outlet} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
