import React, { useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'

const MovieList = () => {
//     const baseURL = 'https://api.themoviedb.org/3/discover/movie';
//     const tn = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYyY2Y2MzI5OTE3ZmUwMGMwNzNmYWI3MjY2NGUzYyIsInN1YiI6IjYxOGQyZTY3N2FjODI5MDA4YWJkODIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryHG9K0ku6YXzB5j9eFU1_uMS07fx9zr0L4NIA3dQNg';
//     const options = {
//         headers: {
//             accept: 'application/json',
//             Authorization: tn
//           }
//     }

//     useEffect(() => {
//         axios.get(baseURL, options)
//         .then(res => {
//             console.log(res.data)
//         })
//     })
  return (
    <div className='flex flex-wrap'>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  )
}

export default MovieList