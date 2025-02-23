import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// PAGES
import HomePage from './pages/HomePage'


// COMPONENTS
import NavComponent from './components/NavComponent'

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:5000") // La URL de tu backend
        .then(response => response.text())
        .then(data => setData(data))
        .catch(error => console.error("Error al obtener datos:", error));
    }, []);

  return (
    <>
      <NavComponent />
      <HomePage />
      <div>
          <h1>Frontend con React</h1>
          <p>Respuesta del backend: {data}</p>
      </div>
    </>
  )
}

export default App
