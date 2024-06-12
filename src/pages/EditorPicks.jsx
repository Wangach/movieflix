import React from 'react'
import Nav from '../componentss/Nav'
import Sidebar from '../componentss/Sidebar'
import Footer from '../componentss/Footer'
import Movie from '../componentss/Movie'
import Showcase from '../componentss/Showcase'

const EditorPicks = () => {
  return (
    <div className='flex flex-wrap'>
     <div className='basis-[15%]'>
      <Sidebar active='Editor'/>
     </div>
     <div className='basis-[85%] bg-[#10141e] border-x-white'>
      <Nav />
      <Showcase />
      <Movie />
      <Footer />
     </div>
    </div>
  )
}

export default EditorPicks