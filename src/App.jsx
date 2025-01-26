import './App.css'
import Hero from './components/Hero'
import Logic from './components/Logic'

function App() {

  return (
    <div className='flex flex-row justify-around items-center min-h-screen '>
      <div >
        <Hero/>
      </div>
      <div>
        <Logic/>
      </div>
    </div>
    
  )
}

export default App
