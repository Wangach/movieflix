import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import poster from '../assets/img/test.jpg'

const Movie = () => {
  // const handleHover = () => {
  //   const overlayDiv = document.getElementById('ovl');
  //   overlayDiv.classList.remove('hidden');
  // };
  // const handleLeave = () => {
  //   const overlayDiv = document.getElementById('ovl');
  //   overlayDiv.classList.add('hidden');
  // };
  const handleClick = () => {
    console.log(e)
  }
  return (
    <div className='relative m-3 border rounded-lg text-red-500 p-1'>
        <img src={poster} alt="Movie Poster" className='w-60 h-80 hover:cursor-pointer' />
        <div className='absolute z-10 -translate-y-[100%] text-primary bg-overlay w-10 h-10 
         transition ease-in-out delay-1000' id='ovl'>
          <div className='fixed top-2 right-1'>
              <span className='rounded-3xl text-star inline p-2 ml-1 text-sm'>
                  <FontAwesomeIcon icon={faStar} />
              </span>
              <span className='bg-main rounded-3xl text-main inline p-2 text-sm' onClick={handleClick}>7.4</span>
            </div>
         </div>
        <div className='absolute hidden z-10 -translate-y-[100%] text-primary bg-overlay w-full h-full 
         transition ease-in-out delay-2000' id='ovl'>
            <div className='fixed bottom-2 p-2'>
              <div className='ml-2'>
                <h2 className='mt-6 font-bold font-merri'>Dune Part Two</h2>
                <blockquote>2024</blockquote>
              </div>
              <div className=''>
                <span className='bg-main rounded-3xl text-main inline p-2 ml-1 text-sm'>
                    Action
                </span>
                <span className='bg-main rounded-3xl text-main inline p-2 ml-1 text-sm'>
                    Drama
                </span>
                <span className='bg-main rounded-3xl text-main inline p-2 ml-1 text-sm'>
                    Thriller
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Movie