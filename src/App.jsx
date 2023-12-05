import Navbar from "./layout/Navbar"


import { Outlet} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default App
