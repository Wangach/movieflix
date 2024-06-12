import React from 'react'
import { useState } from 'react'

const Showcase = () => {
  const showcaseStyles = {
    backgroundImage: 'linear-gradient(to right top, #5c39b8, #8243c4, #a44dce, #c459d9, #e466e2)',
    height: '200px',
    width: '100%',
    borderRadius: '0px 0px 9px 9px'
  }
  return (
    <div className='text-center text-white' style={showcaseStyles}>
      <h3 className='text-[20px] font-merri font-bold uppercase p-[70px]'>Editor Picks</h3>
      <small className='uppercase'>movies / tv shows</small>
       
    </div>
  )
}

export default Showcase