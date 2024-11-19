import './App.css'
import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import Presentation from './Components/presentation'
import Slider from './Components/Slider/Slider'
import Video from './Components/video'
import Work from './Components/Work/Work'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Presentation/>
     <Slider/>
     <Video/>
     <Work/>
    </>
  )
}

export default App
