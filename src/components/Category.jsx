import {FaPizzaSlice} from 'react-icons/fa';
import {GiNoodles, GiSushis,GiHamburger} from 'react-icons/gi';
import '../styles/category.scss';
import { NavLink } from 'react-router-dom';
import React from 'react'


function Category() {
  return (
    <div className='list '>
        <NavLink to={'/cuisine/Italian'} className="nLink">
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'} className="nLink">
            <GiHamburger/>
            <h4>American</h4>
        </NavLink>

        <NavLink to={'/cuisine/Thai'} className="nLink">
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>

        <NavLink to={'/cuisine/Japanese'} className="nLink">
            <GiSushis/>
            <h4>Japanese</h4>
        </NavLink>


    </div>
  )
}


export default Category