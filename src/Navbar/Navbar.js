import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {RiMenu3Line} from 'react-icons/ri';
import {AiFillCloseCircle} from 'react-icons/ai';
function Navbar() {
    const [open ,upOpen] = useState(false); 
    let listObj = [
        {
            name:'Home',
            rout:'/',
        },
        {
            name:'Movies',
            rout:'/movie',
        },
        {
            name:'About',
            rout:'/about',
        },
        {
            name:'Contact',
            rout:'/contact',
        },
    ];
  return (
   <>
    <nav className="navbar">
    <div className="logo">
    <h3>TV SERIES</h3>
    </div>
    <div className="icons">
    {open ? <AiFillCloseCircle className='open' onClick={() => upOpen(false)}/> :<RiMenu3Line className='open' onClick={() => upOpen(true)} />}
    </div>
        <ul className={open ? "li-list activeList" : "li-list"}>
            {listObj.map((element,index) => {
                return(
                    <li onClick={() => upOpen(false)} key={index}><NavLink className='lnk' to={element.rout}>{element.name}</NavLink></li>
                );
            })}
        </ul>
    </nav>
   </>
  )
}

export default Navbar
