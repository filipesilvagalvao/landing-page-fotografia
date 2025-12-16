import Header from "./components/header/Header"
import Portfolio from "./components/portfolio/Portfolio"
import ScrollDown from "./components/scrollDown/ScrollDown"
import Slider from "./components/slider/Slider"
import About from "./components/about/About"
import Testimonials from "./components/testimonials/Testimonials"
import Photos from "./components/photos/Photos"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { GlobalStorage } from "./GlobalStorage"

function App() {

  return (
    <GlobalStorage>
      <Header />
      <Slider />
      <ScrollDown />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </GlobalStorage>
  )
}

export default App
