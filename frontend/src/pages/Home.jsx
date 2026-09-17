import React from 'react'
import foodRecipe from '../assets/food.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'

export default function Home() {
  return (
    <>
        <section className="home">

        <div className="left">
          <span className="welcome">🍴 Welcome to Hungry Diaries</span>

          <h1>
            Delicious Recipes,
            <br />
            <span>Made With Love ❤️</span>
          </h1>

          <h5>
            Hungry for something delicious? Explore recipes, share your
            own creations, and make every bite a part of your story.
          </h5>

          <button>Share Your Recipe</button>
        </div>

        <div className="right">
          <img src={foodRecipe} alt="Delicious food" />
        </div>

      </section>

      <div className="tagline">
        <h3>भूख लगी है... अब कुछ स्वादिष्ट हो जाए! 😋</h3>
      </div>

      <div className="recipe">
        <RecipeItems />
      </div>
    </>
  )
}
