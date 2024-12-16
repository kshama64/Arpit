import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import PrivacyPolicy from './components/Privacypolicy.jsx'
import Home from './components/Home.jsx'
import Terms from './components/Terms.jsx'
import Form from './components/Form.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/privacy' element={<PrivacyPolicy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/form' element={<Form/>}/>
    </Route>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
