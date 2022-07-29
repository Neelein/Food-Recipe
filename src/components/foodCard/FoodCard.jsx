import React from 'react'
import './foodCard.scss'
import { Link } from 'react-router-dom'


const FoodCard = ({food}) => {
  return (
    <Link to={`/singleFood/${food.id}`}>
      <div className='foodCard'>
          <div className="foodCard__wrapper">
              <div className="title">{food.title}</div>
              <div className="foodCard__img">
                  <img src={food.image} alt="" />
              </div>
          </div>
      </div>
    </Link>
  )
}

export default FoodCard
