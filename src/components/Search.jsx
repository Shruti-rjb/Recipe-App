import React,{useState} from 'react';
import '../styles/search.scss';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>        
       
    </form>
  )
}

export default Search