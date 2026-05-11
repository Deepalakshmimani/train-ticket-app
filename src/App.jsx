import React from 'react'
import Navbar from './components/NavBar'
import Sidebar from './components/SideBar'
import MainBanner from './components/MainBanner'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const isSellerPath=useLocation().pathname.includes("seller");
  return (
    <div>
      {isSellerPath? null: <Navbar/>}
      {isSellerPath? null: <Sidebar/>}
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
