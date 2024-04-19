import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Naavbar from './components/Naavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Naavbar/>
      <Outlet/>
    </>
  )
}

export default App
