import React from 'react'
import { Home, Navbar, Page2, Page3, Page4, Page5 } from './components'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="flex flex-col bg-body justify-between h-screen">
      <div className='flex bg-header text-white p-5'>
        <Navbar/>
      </div>
      <div className='flex px-5 h-full overflow-auto'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
          <Route path='/page4' element={<Page4/>}/>
          <Route path='/page5' element={<Page5/>}/>
        </Routes>
      </div>
      <div className='flex py-2 px-5  justify-center items-center bg-header text-white'>
        <div className='flex justify-center items-center flex-col'>
          <span className='flex'>Footer</span>
          <span className='flex'>Copyrights @ 2023</span>
        </div>
      </div>
    </div>
  )
}

export default App
