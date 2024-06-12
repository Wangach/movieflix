import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MovieList = () => {
  const baseURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const tn = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYyY2Y2MzI5OTE3ZmUwMGMwNzNmYWI3MjY2NGUzYyIsInN1YiI6IjYxOGQyZTY3N2FjODI5MDA4YWJkODIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryHG9K0ku6YXzB5j9eFU1_uMS07fx9zr0L4NIA3dQNg`;
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
      console.log(typeof(response.data.results))
      
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
      items.slice(0, 8).map((item) => {
        return(
          <div key={item.id} className="card relative m-3 p-1" style={
            {
              height: '400px',
              width: '250px'
            }
           }>
              <div className='hover:cursor-pointer' style={
                {
                  backgroundImage: `url('https://image.tmdb.org/t/p/original${item.poster_path}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                }
              }>
                <div className="absolute bottom-3 left-2 p-1 bg-overlay rounded">
                  <h1 className='text-zinc-100 text-sm font-bold font-roboto break-normal break-words'>{item.title}</h1>
                  <blockquote className='text-white'>{item.release_date}</blockquote>
                </div>
                <div className='absolute top-2 right-1'>
                  <span className='rounded-3xl text-star inline p-2 ml-1 text-sm'>
                      <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className='bg-main rounded-full text-main inline p-2 text-sm'>{Math.round(item.vote_average)}</span>
                </div>
          </div>
        </div>
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