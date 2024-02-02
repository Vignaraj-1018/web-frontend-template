import React, { useState } from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import { menuClose, menuOpen } from '../assets';

const Navbar = () => {
  const [navToggle,setNavToggle] = useState();

  return (
    <div className='flex justify-between items-center w-full'>
        <div className='flex'>
            <Link to={'/'}><span className='flex text-2xl'>Website Name</span></Link>
        </div>
        <div className='sm:flex hidden'>
          <div className="flex flex-row">
            {navLinks.map((item)=>(
                <Link className='flex text-xl hover:text-primary px-5' key={item.id} to={item.route}>{item.title}</Link>
            ))}
          </div>
        </div>
        <div className='flex sm:hidden'>
          <span className="text-xl" onClick={()=>{setNavToggle(!navToggle)}}>
            <img className='flex w-10 h-10' src={menuOpen}/>
          </span>

          {navToggle &&
            <div className="flex absolute top-0 right-0 w-[100vh] h-[100vh] z-[100] bg-[#433d3d9c]" onClick={()=>{setNavToggle(!navToggle)}}>
              <div className="flex flex-col absolute h-[100vh] w-[10rem] top-0 right-0 bg-black z-[200] gap-5 p-5 ">
                <div className="flex justify-end text-xl" onClick={()=>{setNavToggle(!navToggle)}}>
                  <img className='flex w-10 h-10' src={menuClose}/>
                </div>
                {navLinks.map((item)=>(
                    <Link className='flex text-xl hover:text-primary px-5 ' key={item.id} to={item.route}>{item.title}</Link>
                ))}
              </div>
            </div>
          }
        
        </div>
    </div>
  )
}

export default Navbar