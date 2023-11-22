import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { TheamContext } from './Context/TheamContext'

function App() {
  const [count, setCount] = useState(0)
  const [theam, setTheam] = useState('light')

  useEffect(() =>{
    setTheam(localStorage.getItem('theam')?localStorage.getItem('theam'):'dark')
  }, [])

  return (
    <TheamContext.Provider value={{theam, setTheam}}>
      <div className={`${theam} ${theam == 'dark'? 'bg-[#121212]' : null} min-h-[100vh]`}>
        <Header />
        <Home/>
      </div>
    </TheamContext.Provider>
    
  )
}

export default App
