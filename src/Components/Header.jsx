import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Header extends Component {
  render() {

    const active  = (e) =>{
        if(e.isActive===true){
            return 'text-black '
        }
        
    }
    return (
      <div className='bg-blue-200 text-gray-600 flex justify-between px-3 py-4 font-semibold'>
        <h1 className='text-3xl font-bold ml-2 text-gray-500 select-none cursor-pointer'>
            Rounak Bhandari
        </h1>
        <nav className='space-x-5 mr-10 text-2xl '>
          <NavLink to={'/'} className={(e)=>active(e)}>Home</NavLink>
            <NavLink to={'/about'} className={(e)=> active(e)}>About</NavLink>
            <NavLink to={'/contact'} className={(e)=>active(e)} >Contact</NavLink>
        </nav>
      </div>
    )
  }
}

export default Header