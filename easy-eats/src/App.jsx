import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// PAGES
import HomePage from './pages/HomePage'


// COMPONENTS
import NavComponent from './components/NavComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavComponent />
      <HomePage />
    </>
  )
}

export default App
