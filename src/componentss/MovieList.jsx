import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import poster from '../assets/img/test.jpg'

const MovieList = () => {
  const baseURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const tn = '';
  const [items, setItems] = useState('')
  const [dataLoaded, setDataLoaded] = useState(false)
  const options = {
    method: 'GET',
    url: baseURL,
    headers: {
        accept: 'application/json',
        Authorization: tn
      }
  }


useEffect(() => {
  axios.request(options)
 .then((response) => {
   console.log(response.data.results)
   setItems(response.data.results)
   setDataLoaded(true)
 
 })
 .catch((error) => {
    console.log(error)
  })
}, [])

  
  return (
    <>
      {dataLoaded ? (
      items.map((item) => {
        return(
          <>
           <div className='relative m-3 border rounded-lg text-red-500 p-1' key={item.id}>
            <img src={'https://api.themoviedb.org/3/discover/movie/'+item.poster_path} alt="Movie Poster" className='w-60 h-80 hover:cursor-pointer' />
            <div className='absolute z-20 -translate-y-[100%] text-primary bg-overlay w-10 h-10 
             transition ease-in-out delay-3000' id='ovl1'>
              <div className='fixed top-2 right-1'>
                  <span className='rounded-3xl text-star inline p-2 ml-1 text-sm'>
                      <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className='bg-main rounded-3xl text-main inline p-2 text-sm'>{Math.round(item.vote_average)}</span>
                </div>
             </div>
            <div className='absolute z-10 -translate-y-[100%] text-primary bg-overlay w-full h-full 
             transition ease-in-out delay-2000' id='ovl'>
                <div className='fixed bottom-2 p-2'>
                  <div className='mr-2 float-right block'>
                    <h2 className='mt-6 font-bold font-merri'>{item.title}</h2>
                    <blockquote>{item.release_date}</blockquote>
                  </div>
                  <div className=''>
                    {item.genre_ids.forEach((genre_id) =>{
                      return(
                        <span className='bg-main rounded-3xl text-main inline p-2 ml-1 text-sm'>
                          {genre_id}
                        </span>
                      )
                    })}
                  </div>
                </div>
            </div>
        </div>
         </>
        )
        
      })):(
      <div>
        <h1>Loading...</h1>
      </div>
      )}
    </>
  )




}

export default MovieList