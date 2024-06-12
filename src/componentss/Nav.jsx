import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-primary text-primary flex justify-between content-center p-3 w-full h-14'>
      <div className="logo bold uppercase cursor-pointer">
        MovieFlex
      </div>
      <ul className=''>
          <li className='inline-block pr-4'>
            <Link to='/'>Login</Link>
          </li>
          <li className='inline-block pr-4'>
            <Link to='/'>Sign Up</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Nav