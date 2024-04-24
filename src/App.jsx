import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  return (
    <div className='bg-[#26292E]'>

<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/home/*' element={<Home/>} />
    {/* <Route path='' element={} /> */}
  {/* <Route path='' element={} /> */}


</Routes>




    </div>
  )
}

export default App