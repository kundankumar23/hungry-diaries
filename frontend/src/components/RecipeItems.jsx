import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function RecipeItems() {
  const recipes = useLoaderData();
  const [allRecipes, setAllRecipes] = useState([]);
  const [isFavRecipe, setIsFavRecipe] = useState(false);

  const path = window.location.pathname === "/myRecipe";

  const favItems = JSON.parse(localStorage.getItem("fav")) ?? [];

  useEffect(() => {
    setAllRecipes(recipes || []);
  }, [recipes]);

  // Delete Recipe
  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/recipe/${id}`);

      // Remove recipe from cards
      setAllRecipes((recipes) => recipes.filter((recipe) => recipe._id !== id));

      // Also remove recipe from favorites
      const updatedFavorites = favItems.filter((recipe) => recipe._id !== id);

      localStorage.setItem("fav", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.log(error);
    }
  };

  // Add / Remove Favorite
  const favRecipe = (item) => {
    const alreadyFavorite = favItems.some((recipe) => recipe._id === item._id);

    let updatedFavorites;

    if (alreadyFavorite) {
      // Remove from favorites
      updatedFavorites = favItems.filter((recipe) => recipe._id !== item._id);
    } else {
      // Add to favorites
      updatedFavorites = [...favItems, item];
    }

    localStorage.setItem("fav", JSON.stringify(updatedFavorites));

    setIsFavRecipe((previous) => !previous);
  };

  return (
    <div className="card-container">
      {allRecipes.map((item) => {
        const isFavorite = favItems.some((recipe) => recipe._id === item._id);

        return (
          <Link to={`/recipe/${item._id}`} key={item._id} className="card">
            <img
              src={`http://localhost:5000/images/${item.coverImage}`}
              className="card-image"
              alt={item.title}
            />

            <div className="card-body">
              <div className="title">{item.title}</div>

              <div className="divide"></div>

              <div className="icons">
                <div className="timer">
                  <BsStopwatchFill />
                  <span>{item.time}</span>
                </div>

                {!path ? (
                  // Favorite
                  <FaHeart
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      favRecipe(item);
                    }}
                    style={{
                      color: isFavorite ? "red" : "",
                    }}
                  />
                ) : (
                  // Edit + Delete
                  <div className="action">
                    <Link
                      to={`/editRecipe/${item._id}`}
                      className="editIcon"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaEdit />
                    </Link>

                    <MdDelete
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onDelete(item._id);
                      }}
                      className="deleteIcon"
                    />
                  </div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
