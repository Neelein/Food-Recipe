import React from 'react'
import './search.scss'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FoodCard from '../../components/foodCard/FoodCard'

const Search = () => {

    const [result,setResult]=useState([])
    let params=useParams()
    let searchName=params.name
    useEffect(()=>{
        handleSearch()

    },[searchName])
    const handleSearch=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchName}`)
        const data=await res.json()
        setResult(data.results)
    }


  return (
    <div className='search'>
        {result.map((food)=>(
            <FoodCard food={food}/>
        ))}
    </div>
  )
}

export default Search