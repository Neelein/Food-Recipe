import React from 'react'
import './foodList.scss'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FoodCard from '../../components/foodCard/FoodCard'

const FoodList = () => {

    let params=useParams()
    let cate=params.cate

    const [cuisine,setCuisine]=useState([])

    useEffect(()=>{
        fetchcuisine()
        
    },[cate])

    const fetchcuisine=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cate}`)
        const data=await res.json()
        setCuisine(data.results)
    }
    console.log(cuisine)
    
    
    return (
        <div className='foodList'>
            {cuisine.map((c)=>(
                <FoodCard food={c}/>
            ))}
        </div>
    )
}

export default FoodList