import React from 'react'
import MainBanner from '../components/MainBanner'
import Recommended from '../components/RecommendedTrains'
import { useAppContext } from '../context/AppContext'
import Search from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

const Home = () => {
    const {user}=useAppContext();
  return (
    <div>
      <MainBanner/>
      {user &&<Recommended/>}
      <Search/>
      <SearchResults/>
    </div>
  )
}

export default Home
