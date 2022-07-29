import React from 'react'
import './category.scss'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='category'>
      <ul className="category__list">
        <Link to={'/foodList/italian'} className='link'>
          <li className="category__item">
            <LocalPizzaIcon/>
            <span>Italian </span>
          </li>
        </Link>
        <Link to={'/foodList/American'} className='link'>
          <li className="category__item">
            <LunchDiningIcon/>
            <span>America</span>
          </li>
        </Link>
        <Link to={'/foodList/Chinese'} className='link'>
          <li className="category__item">
            <RamenDiningIcon/>
            <span>Chinese</span>
          </li>
        </Link>
        <Link to={'/foodList/Japanese'} className='link'>
          <li className="category__item">
            <SetMealIcon/>
            <span>Japanese</span>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Category
