import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-primary text-primary flex justify-between content-center p-3 w-full h-14'>
      <div className="logo bold uppercase cursor-pointer">
        MovieFlex
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className='rounded-md p-1'/>
      </div>
      <ul className=''>
          <li className='inline-block pr-4'>
            <a href="/about">Log In</a>
          </li>
          <li className='inline-block pr-4'>
            <a href="/contact">Sign Up</a>
          </li>
      </ul>
    </nav>
  )
}

export default Nav