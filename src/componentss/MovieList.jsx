import React, { useEffect } from 'react'
import axios from 'axios'

const MovieList = () => {
    const baseURL = 'https://api.themoviedb.org/3/discover/movie';
    const API_KEY = 'c362cf6329917fe00c073fab72664e3c';
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: }
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