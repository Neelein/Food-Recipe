import React from 'react'
import FoodCard from '../FoodCard/FoodCard'
import './popFoodList.scss'
import { useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopFoodList = () => {
    const [fetchFood,setFetchFood]=useState([])

    let check=JSON.parse(localStorage.getItem('popular'))

    useEffect(()=>{
        if(check){
            setFetchFood(check)
        }else{
            fetchData()
        }
    },[])

    const fetchData=async()=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
        const data=await res.json()
        setFetchFood(data.recipes)
        localStorage.setItem('popular',JSON.stringify(data.recipes))
    }

  return (
    <div className='popFoodList'>
        <div className="popFooList__title">
            <h1>Popular Meals</h1>
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

export default PopFoodList
