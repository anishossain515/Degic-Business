import './App.css'
import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import Presentation from './Components/presentation'
import Slider from './Components/Slider_Section/Slider'
import Video from './Components/video'
import Work from './Components/Work_Section/Work'
import Bomb from './Components/Bomb'
import Block from './Components/Block Section/Block'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Presentation/>
     <Slider/>
     <Video/>
     <Work/>
     <Bomb/>
     <Block/>
     <Footer/>
    </>
  )
}

export default App
