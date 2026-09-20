import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsStopwatchFill } from "react-icons/bs";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/recipe/${id}`);

        setRecipe(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="recipe-loading">Loading...</div>;
  }

  return (
    <main className="food-detail-page">
      {/* Left Image */}
      <div className="food-detail-image">
        <img
          src={`http://localhost:5000/images/${recipe.coverImage}`}
          alt={recipe.title}
        />
      </div>

      {/* Right Content */}
      <div className="food-detail-content">
        <h1>{recipe.title}</h1>

        <div className="food-detail-time">
          <BsStopwatchFill />
          <span>{recipe.time}</span>
        </div>

        <div className="food-detail-section">
          <h2>Ingredients</h2>

          <p className="ingredients">{recipe.ingredients.join(", ")}</p>
        </div>

        <div className="food-detail-section">
          <h2>Instructions</h2>

          <p>{recipe.instructions}</p>
        </div>
      </div>
    </main>
  );
}
