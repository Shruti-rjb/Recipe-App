import { useEffect, useState } from "react";
import '../styles/popular.scss'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import PageContext from "../context/PageContext";

function Popular() {

  const {pages} = useContext(PageContext);
  // const [popular, setPopular] = useState([]);

  // useEffect(() => {
  //   getPopular();
  // }, []);

  // const getPopular = async () => {

  //   const check =localStorage.getItem('popular');

  //   if(check){
  //     setPopular(JSON.parse(check));
  //   }else{
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
  //     );
    

  //   const data = await api.json();
  //   localStorage.setItem('popular',JSON.stringify(data.recipes));
  //   //console.log(data,"recipes")
  //   setPopular(data.recipes);
  // }
  // };
 
    return (
      <div>
      <div className="wrapper">
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"2rem",
      }}>

        {pages?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="block">
                <Link to ={"/recipe/" + recipe.id}>
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

export default Popular;
