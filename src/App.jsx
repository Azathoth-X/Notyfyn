import './App.css'
import Hero from './components/Hero'
import Logic from './components/Logic'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <main className="flex-1 flex flex-row justify-around items-center">
        <div>
          <Hero/>
        </div>
        <div>
          <Logic/>
        </div>
      </main>
    </div>
  )
}

export default App
