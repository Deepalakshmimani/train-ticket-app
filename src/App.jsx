import React from 'react'
import Navbar from './components/NavBar'
import Sidebar from './components/SideBar'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'

import Login from './components/Login'
import AllTrains from './pages/AllTrains'
import TrainDetails from './pages/TrainDetails'
import BookingPage from './pages/BookingPage'

import { Toaster } from "react-hot-toast";

const App = () => {

  const isSellerPath = useLocation()
    .pathname.includes("seller");

  const { showUserLogin } = useAppContext();

  return (

    <div>

      {!isSellerPath && <Navbar />}
      {!isSellerPath && <Sidebar />}

      {showUserLogin && <Login />}

      <Toaster />

      <div>

        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/trains'
            element={<AllTrains />}
          />

          <Route
            path='/train/:id'
            element={<TrainDetails />}
          />

          <Route
            path='/book/:id'
            element={<BookingPage />}
          />

        </Routes>

      </div>

      {!isSellerPath && <Footer />}

    </div>
  )
}

export default App