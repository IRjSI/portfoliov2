import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (
    <div className='bg-[#020300] min-h-screen px-8 pt-8'>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
