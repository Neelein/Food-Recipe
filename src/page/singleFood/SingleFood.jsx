import React from 'react'
import './singleFood.scss'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleFood = () => {

  const [detail,setDetail]=useState([])
  const [tab,setTab]=useState('instructions')
  const  params=useParams()
  const  id=params.id

  useEffect(()=>{
    getDetail()
  },[])

  const getDetail=async()=>{
    const res=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data=await res.json()
    setDetail(data)
  }

  return (
    <div className='singleFood'>
      <div className="singleFood__wrapper">
        <div className="left">
          <div className="title">
            <h1>{detail.title}</h1>
          </div>
          <div className="img">
            <img src={detail.image} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="button">
            <button className={tab === 'instructions'?'instructions active':'instructions'} onClick={() => setTab('instructions')}>Instructions</button>
            <button className={tab === 'ingredients'?'ingredients active':'ingredients'} onClick={() => setTab('ingredients')}>Ingredients</button>
          </div>
          <div className="desc">
            {tab === 'instructions'?<p dangerouslySetInnerHTML={{__html:detail.instructions}}></p>:''}
            {tab === 'ingredients'?<p dangerouslySetInnerHTML={{__html:detail.summary}}></p>:''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFood
