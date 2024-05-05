import React from 'react'
import Nav from './componentss/Nav'
import Sidebar from './componentss/Sidebar'
import Footer from './componentss/Footer'
import Movie from './componentss/Movie'

const App = () => {
  return (
    <div className='flex flex-wrap'>
     <div className='basis-[15%] '>
      <Sidebar />
     </div>
     <div className='basis-[85%]'>
      <Nav />
      <Movie />
      <Footer />
     </div>
    </div>
  )
}

export default App