import React, { useEffect } from 'react'
import axios from 'axios'

const MovieList = () => {
    const baseURL = 'https://api.themoviedb.org/3/discover/movie';
    const API_KEY = 'c362cf6329917fe00c073fab72664e3c';
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzYyY2Y2MzI5OTE3ZmUwMGMwNzNmYWI3MjY2NGUzYyIsInN1YiI6IjYxOGQyZTY3N2FjODI5MDA4YWJkODIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryHG9K0ku6YXzB5j9eFU1_uMS07fx9zr0L4NIA3dQNg'
          }
    }

    useEffect(() => {
        axios.get(baseURL, options)
        .then(res => {
            console.log(res.data)
        })
    })
  return (
    <div>MovieList</div>
  )
}

export default MovieList