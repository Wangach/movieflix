import React from 'react'
import logo from '../assets/logo/logo.png'

const Sidebar = () => {
  let genreClass = 'p-2 m-1 bg-light rounded-[10px] text-center text-sm hover:bg-onh transition ease-in-out duration-800 cursor-pointer';
  return (
    <ul className='bg-primary text-primary h-screen'>
      <li className="logo">
        <img src={logo} alt="logo" className='h-24 w-24 mx-auto' />
      </li>
      <li className=''>
        <ul className='p-4 text-justify'>
          <li className='p-2'>
            <a href="#">Latest</a>
          </li>
          <li className='p-2'>
            <a href="#">Trending</a>
          </li>
          <li className='p-2'>
            <a href="#">Editor Picks</a>
          </li>
        </ul>
      </li>
      <hr />
      <h2 className='text-center font-bold uppercase m-2'>Movie Genres</h2>
      <ul className='text-justify mx-auto flex flex-wrap'>
        <li className={genreClass}>
          <a href="#">Action</a>
        </li>
        <li className={genreClass}>
          <a href="#">Thriller</a>
        </li>
        <li className={genreClass}>
          <a href="#">Drama</a>
        </li>
        <li className={genreClass}>
          <a href="#">Romance</a>
        </li>
        <li className={genreClass}>
          <a href="#">Horror</a>
        </li>
        <li className={genreClass}>
          <a href="#">Adventure</a>
        </li>
        <li className={genreClass}>
          <a href="#">Crime</a>
        </li>
        <li className={genreClass}>
          <a href="#">Comedy</a>
        </li>
        <li className={genreClass}>
          <a href="#">Sci-Fi</a>
        </li>
        <li className={genreClass}>
          <a href="#">More...</a>
        </li>
      </ul>
    </ul>
  )
}

export default Sidebar