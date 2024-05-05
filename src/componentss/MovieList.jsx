import React, { useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import poster from '../assets/img/test.jpg'

const MovieList = () => {
  const baseURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const tn = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYyY2Y2MzI5OTE3ZmUwMGMwNzNmYWI3MjY2NGUzYyIsInN1YiI6IjYxOGQyZTY3N2FjODI5MDA4YWJkODIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryHG9K0ku6YXzB5j9eFU1_uMS07fx9zr0L4NIA3dQNg';
  const options = {
    method: 'GET',
    url: baseURL,
    headers: {
        accept: 'application/json',
        Authorization: tn
      }
  }

let fetchData = () => {
  axios.request(options)
  .then((response) => {
    return response.data.results
  })
}

let showData = async () => {
  const items = await fetchData
  console.log(items) 
} 
 
showData()


  // items.map((item) => {
  //   return(
  //     <div className='relative m-3 border rounded-lg text-red-500 p-1' key={item.id}>
  //       <img src={poster} alt="Movie Poster" className='w-60 h-80 hover:cursor-pointer' />
  //       <div className='absolute z-20 -translate-y-[100%] text-primary bg-overlay w-10 h-10 
  //        transition ease-in-out delay-3000' id='ovl1'>
  //         <div className='fixed top-2 right-1'>
  //             <span className='rounded-3xl text-star inline p-2 ml-1 text-sm'>
  //                 <FontAwesomeIcon icon={faStar} />
  //             </span>
  //             <span className='bg-main rounded-3xl text-main inline p-2 text-sm'>{item.rating}</span>
  //           </div>
  //        </div>
  //       <div className='absolute z-10 -translate-y-[100%] text-primary bg-overlay w-full h-full 
  //        transition ease-in-out delay-2000' id='ovl'>
  //           <div className='fixed bottom-2 p-2'>
  //             <div className='mr-2 float-right block'>
  //               <h2 className='mt-6 font-bold font-merri'>{item.name}</h2>
  //               <blockquote>{item.release_date}</blockquote>
  //             </div>
  //             <div className=''>
  //               {item.genre_ids.forEach((genre_id) =>{
  //                 return(
  //                   <span className='bg-main rounded-3xl text-main inline p-2 ml-1 text-sm'>
  //                     {genre_id}
  //                   </span>
  //                 )
  //               })}
  //             </div>
  //           </div>
  //       </div>
  //   </div>
  //   )
    
  // })

  // function handleClick(e) {
  //   let positions = {
  //     mousePstX: e.screenX,
  //     mousePstY: e.screenY
  //   }
  //   const overlayDiv = document.getElementById('ovl');
  //   if(overlayDiv.classList.contains('hidden')){
  //     overlayDiv.classList.remove('hidden');
  //   }else{
  //     overlayDiv.classList.add('hidden');
  //   }
  //   console.log(e)
  // }
  // let movies = [
  //   {
  //     id: 1,
  //     name: "Game Of Thrones",
  //     releaseYear: 2013,
  //     rating: 9.2,
  //     genre: ["Action", "Epic"],
  //     poster: {poster}
  //   },
  //   {
  //     id: 2,
  //     name: "Venom Part Two",
  //     releaseYear: 2021,
  //     rating: 7.0,
  //     genre: ["Action", "Fantasy"],
  //     poster: {poster}
  //   },
  //   {
  //     id: 3,
  //     name: "Godzilla Minus One",
  //     releaseYear: 2023,
  //     rating: 7.0,
  //     genre: ["Action", "Fantasy"],
  //     poster: {poster}
  //   },
  //   {
  //     id: 4,
  //     name: "The Good Doctor",
  //     releaseYear: 2018,
  //     rating: 8.2,
  //     genre: ["Drama"],
  //     poster: {poster}
  //   }
  // ];

  



  // let items = res.data.results
  
}

export default MovieList