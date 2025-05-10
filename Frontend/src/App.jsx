import React from 'react'
import Landing from './components/Landing'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/login_register/Login'
import Signup from './components/login_register/Signup'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      {/* <Route path='/directory' element={<AlumniDirectory/>}></Route> */}
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/home' element={<Home />} /> */}
      {/* <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home />} /> */}
    </Routes>
   </BrowserRouter>
    </>
    
  )
}

export default App
