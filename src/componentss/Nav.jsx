import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-black text-white flex justify-between content-center p-3 fixed w-screen '>
      <div className="logo bold uppercase cursor-pointer">
        MovieFlex
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className='rounded-md p-1'/>
      </div>
      <ul className=''>
          <li className='inline-block pr-4'>
            <a href="/">Home</a>
          </li>
          <li className='inline-block pr-4'>
            <a href="/about">About</a>
          </li>
          <li className='inline-block pr-4'>
            <a href="/contact">Contact</a>
          </li>
      </ul>
    </nav>
  )
}

export default Nav