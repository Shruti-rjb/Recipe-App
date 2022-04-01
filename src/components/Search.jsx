import React,{useState} from 'react';
import '../styles/search.scss';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';



function Search() {

    const [input,setInput] =useState("");
    const navigate =useNavigate();

    const submitHandler =(e)=>{
        e.preventDefault();
        navigate("/searched/"+input)
    
    }

  return (

    <form className='formStyle' onSubmit={submitHandler}>
      
        <FaSearch style={{"marginLeft":"2rem"}}/>
     
        <input 
        onChange={(e)=>{setInput (e.target.value)}}
        type ="text"
        value = {input}
        placeholder="Search for the Recipe..."
       
        />
   
       
    </form>
  )
}

export default Search