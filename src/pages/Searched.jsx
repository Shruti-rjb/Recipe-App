import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/searched.scss';
import {Link} from 'react-router-dom';

function Searched() {
    const params = useParams();
    const [searchedRecipes,setSearchedRecipes] = useState([]);

    const getSearched =async (name) =>{
      
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        
    }

    useEffect(()=>{
        getSearched(params.search);
    },[params.search])

  return (
    <div className='gridBlock'>
        {searchedRecipes.map((items)=>{
            return(
                <div className='gridCard' key ={items.id}>
                    <Link to={"/recipe/"+items.id}>
                    <img src={items.image} alt={items.title}></img>
                    <h4>{items.title}</h4>

                    </Link>
                    
                </div>
            
            )
        })}
    </div>
  )
}

export default Searched