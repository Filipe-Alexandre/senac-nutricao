import { useEffect } from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import ErvasEspeciarias from './components/ErvasEspeciarias'
import Aproveitamento from './components/Aproveitamento'
import Pancs from './components/Pancs'
import Videos from './components/Videos'
import Footer from './components/Footer'
import StartBtn from './components/StartBtn'

import ScrollSpy from 'bootstrap/js/dist/scrollspy'

function App() {

  useEffect(() => {
    const scrollElement = document.querySelector('main')

    if (scrollElement) {
      const spy = new ScrollSpy(scrollElement, {
        target: '#navbarNav',
        offset: 80,
      })

      return () => spy.dispose()
    }
  }, [])

  return (
    <>
      <Header />

      <main
        data-bs-spy="scroll"
        data-bs-target="#navbarNav"
        data-bs-offset="80"
        tabIndex="0"
      >
        <Inicio />
        <Sobre />
        <ErvasEspeciarias />
        <Aproveitamento />
        <Pancs />
        <Videos />
      </main>

      <StartBtn />
      <Footer />
    </>
  )
}

export default App
