import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Whatsapp from './components/whatsapp'
import Footer1 from './components/Footer1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    {/* <Home/> */}
    <Outlet/>
    <Whatsapp/>
    {/* <Footer/> */}
    
 
    </>
  )
}

export default App
