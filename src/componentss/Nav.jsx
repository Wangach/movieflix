import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-black text-white flex justify-between'>
      <div className="logo">
        MovieFlex
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav