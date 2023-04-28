import React from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <div className='flex'>
            <Link to={'/'}><span className='flex text-2xl'>Website Name</span></Link>
        </div>
        <div className='flex'>
            {navLinks.map((item)=>(
                <Link className='flex text-xl hover:text-primary px-5' key={item.id} to={item.route}>{item.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar