import React from 'react'
import Banner from '../components/Banner'
import BestSellerbooks from './BestSellerbooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'



const Home = () => {
  return (
    <div>
        <Banner/>
        <BestSellerbooks/>
        <FavBook/>
        <PromoBanner/>
    </div>
  )
}

export default Home
