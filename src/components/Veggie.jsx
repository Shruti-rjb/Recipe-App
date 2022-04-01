import { useEffect, useState } from "react";
import '../styles/popular.scss';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';




function Veggie() {

  
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check =localStorage.getItem('veggie');

    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
    

    const data = await api.json();
      
    localStorage.setItem('veggie',JSON.stringify(data.recipes));
    //console.log(data,"recipes")
    setVeggie(data.recipes);
  }
  };
 
    return (
      <div>
      <div className="wrapper">
      <h3>Vegeterian Picks</h3>
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"2rem",
      }}>

        {veggie?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="block">
                <Link to= {"/recipe/" + recipe.id}>
                <div className="gradient">
                <p className="pblock">{recipe.title}</p>
                <img src={recipe.image} className="pimg" alt={recipe.title} />
                </div>
                </Link>
              
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
      </div>
 
    );
 
}



  




export default Veggie;
