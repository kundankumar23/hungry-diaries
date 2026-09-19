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

  return (
    <>
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

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E23744" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,224C320,203,400,149,480,112C560,75,640,53,720,64C800,75,880,117,960,160C1040,203,1120,245,1200,218.7C1280,192,1360,96,1400,48L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E23744" fill-opacity="1" d="M0,0L48,21.3C96,43,192,85,288,128C384,171,480,213,576,213.3C672,213,768,171,864,176C960,181,1056,235,1152,250.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E23744" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,85.3C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E23744" fill-opacity="1" d="M0,128L30,133.3C60,139,120,149,180,165.3C240,181,300,203,360,229.3C420,256,480,288,540,282.7C600,277,660,235,720,213.3C780,192,840,192,900,197.3C960,203,1020,213,1080,234.7C1140,256,1200,288,1260,266.7C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}

      <div className="tagline">
        <h3>भूख लगी है... अब कुछ स्वादिष्ट हो जाए! 😋</h3>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E23744" fill-opacity="1" d="M0,32L26.7,64C53.3,96,107,160,160,170.7C213.3,181,267,139,320,128C373.3,117,427,139,480,165.3C533.3,192,587,224,640,208C693.3,192,747,128,800,117.3C853.3,107,907,149,960,160C1013.3,171,1067,149,1120,170.7C1173.3,192,1227,256,1280,261.3C1333.3,267,1387,213,1413,186.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg> */}

      {(isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}

      <div className="recipe">
        <RecipeItems />
      </div>
    </>
  )
}
