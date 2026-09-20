import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditRecipe() {

    const [recipeData, setRecipeData] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getData = async() => {
            await axios.get(`http://localhost:5000/recipe/${id}`)
            .then(response => {
                let res = response.data
                setRecipeData({
                    title : res.title,
                    time : res.time,
                    ingredients : res.ingredients.join(","),
                    instructions : res.instructions
                })
            })
        }
        getData();
    },[])

    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file") ? e.target.files[0] : e.target.value;
        setRecipeData(pre => ({...pre, [e.target.name]:val}));
    }

    const onHandleSubmit = async(e) => {
        e.preventDefault();
        console.log(recipeData)
        await axios.put(`http://localhost:5000/recipe/${id}`, recipeData, {
            headers: {
                'Content-Type' : 'multipart/form-data',
                'authorization' : 'bearer ' + localStorage.getItem("token")
            }
        })
        .then(() => navigate("/myRecipe"))
    }

  return (
    <>
        <div className="container">
            <form className="form" onSubmit={onHandleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='input' name='title' id='title' onChange={onHandleChange} value={recipeData.title}/>
                </div>
                <div className="form-control">
                    <label htmlFor="time">Time</label>
                    <input type="text" className='input' name='time' id='time' onChange={onHandleChange} value={recipeData.time}/>
                </div>
                <div className="form-control">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea type="text" className='input-textarea' name="ingredients" rows='5' id='ingredients' onChange={onHandleChange} value={recipeData.ingredients}></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea type="text" className='input-textarea' name="instructions" rows='5' id='instructions' onChange={onHandleChange} value={recipeData.instructions}></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="file">Recipe Image</label>
                    <input type="file" className='input' name='file' onChange={onHandleChange}/>
                </div>
                <button type='submit'>Edit Recipe</button>
            </form>
        </div>
    </>
  )
}
