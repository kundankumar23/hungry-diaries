import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/dosa.jpg'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

export default function RecipeItems() {

  const allRecipes = useLoaderData()
  console.log(allRecipes);
    
  return (
    <div className="card-container">
      {
        allRecipes?.map((item, index) => {
          return <div key={index} className="card">
            <img src={foodImg} className='card-image' />
            <div className="card-body">
              <div className="title">{item.title}</div>
              <div className='divide'></div>
              <div className="icons">
                <div className="timer"><BsStopwatchFill /><span> 25 min</span></div>
                <FaHeart />
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}
