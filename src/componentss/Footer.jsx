import React from 'react'

const Footer = () => {
  return (
   <footer className='fixed w-full bottom-0 text-center bg-primary text-primary z-20'>
    <p className='-translate-x-10 font-bold'>&copy; {new Date().getFullYear()}</p>
   </footer>
  )
}

export default Footer