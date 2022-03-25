import React from 'react'
import FoodCard from '../foodCard/FoodCard'
import './vegFoodList.scss'
import { useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const VegFoodList = () => {
    const [fetchFood,setFetchFood]=useState([])
    let check=JSON.parse(localStorage.getItem('vegetarian'))
    useEffect(()=>{
        if(check){
            setFetchFood(check)
        }else{
            fetchData()
        }
    },[])
    const fetchData=async()=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`)
        const data=await res.json()
        setFetchFood(data.recipes)
        localStorage.setItem('vegetarian',JSON.stringify(data.recipes))
        
    }
  return (
    <div className='vegFoodList'>
        <div className="vegFooList__title">
            <h1>Vegetarian Meals</h1>
        </div>
        <Swiper 
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
                {fetchFood.map((food)=>(
                    <SwiperSlide>
                        <FoodCard food={food} key={food.id} />
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default VegFoodList