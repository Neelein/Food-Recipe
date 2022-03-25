import React from 'react'
import './home.scss'
import PopFoodList from '../../components/popFoodList/PopFoodList'
import VegFoodList from '../../components/vegFoodList/VegFoodList'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__wrapper">
            <PopFoodList/>
            <VegFoodList/>
        </div>
    </div>
  )
}

export default Home