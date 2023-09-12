import tailwindConfig from "../tailwind.config"
import Navbar from "./Navbar"

function App() {
  return (
    <body className='home-template is-head-left-logo has-cover is-dropdown-loaded'>
      <div className='viewport'>
        <Navbar />
      </div>
    </body>
  )
}

export default App
