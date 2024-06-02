import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import poster from '../assets/img/test.jpg'

const MovieList = () => {
  const baseURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const tn = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYyY2Y2MzI5OTE3ZmUwMGMwNzNmYWI3MjY2NGUzYyIsInN1YiI6IjYxOGQyZTY3N2FjODI5MDA4YWJkODIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryHG9K0ku6YXzB5j9eFU1_uMS07fx9zr0L4NIA3dQNg`;
  const [items, setItems] = useState('')
  const [imagePath, setImagePath] = useState('')
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
      // response.data.results.forEach((result) => {
      //   retImagePath(result.id)
      // })
      
      setItems(response.data.results)
      setDataLoaded(true)

    
    })
    .catch((error) => {
      console.log(error)
    })
    // let retImagePath = (id) => {
    //   let imgid = id
    //   let imageUrl = `https://api.themoviedb.org/3/movie/${imgid}/images`
    //   let imageOptions = {
    //     method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYyY2Y2MzI5OTE3ZmUwMGMwNzNmYWI3MjY2NGUzYyIsInN1YiI6IjYxOGQyZTY3N2FjODI5MDA4YWJkODIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryHG9K0ku6YXzB5j9eFU1_uMS07fx9zr0L4NIA3dQNg'
    //   }
    //   }
    //   fetch(imageUrl, imageOptions)
    //   .then(response => response.json())
    //   .then((response) => {
    //     // console.log(response)
    //     Object.entries(response.posters[2]).forEach(([key, value]) => {
    //       if(key === 'file_path'){
    //         // console.log(`https://image.tmdb.org/t/p/w500${value}`)
    //         setImagePath(`https://image.tmdb.org/t/p/w500${value}`)
    //       }
    //     })
    //   })
    //   .catch(err => console.error(err));
    // }
}, [])

  
  return (
    <>
      {dataLoaded ? (
      items.map((item) => {
        return(
          <>
           <div className='relative m-3 border rounded-lg text-red-500 p-1' key='1'>
              {
                Object.entries(item).forEach(([key, value]) => {
                  // console.log(`For this ${key} I choose ${value}`)
                  if(key === 'adult'){
                    return(
                      <img src={`https://image.tmdb.org/t/p/w500${value}`} alt="Movie Poster" className='w-60 h-80 hover:cursor-pointer' />
                    )
                  }else{
                    throw new Error(`Backdrop path not found!`)
                  }
                })
              }
            {/* <img src={imagePath} alt="Movie Poster" className='w-60 h-80 hover:cursor-pointer' /> */}
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