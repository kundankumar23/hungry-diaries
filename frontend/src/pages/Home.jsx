import React, { useState } from 'react'
import foodRecipe from '../assets/food3.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/inputForm'

export default function Home() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const addRecipe = () => {
    let token = localStorage.getItem("token");
    if(token) {
      navigate("/addRecipe");
    }
    else {
      setIsOpen(true);
    }
  }

  let path = window.location.pathname === "/" ? true : false;

  return (
    <>
        {(path) ? (<> 
        <section className="home">

        <div className="left">
          <span className="welcome">Welcome to Hungry Diaries</span>

          <h1>
            Delicious Recipes,
            <br />
            <span>Made With Love ❤️</span>
          </h1>

          <h5>
            Hungry for something delicious? Explore recipes, share your
            own creations, and make every bite a part of your story.
          </h5>

          <button onClick={addRecipe}>Share Your Recipe</button>
        </div>

        <div className="right">
          <img src={foodRecipe} alt="Delicious food" />
        </div>

      </section>

      <div className="tagline">
        <h3>भूख लगी है... अब कुछ स्वादिष्ट हो जाए! 😋</h3>
      </div>
      </>) : ""}

      {(isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}

      <div className="recipe">
        <RecipeItems />
      </div>
    </>
  )
}
