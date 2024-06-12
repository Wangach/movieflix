import React from 'react'
import MovieList from './MovieList'
import SeriesList from './SeriesList'

const Movie = () => {
  return (
    <div className="flex flex-wrap">
      <MovieList id='1'/>
      <SeriesList />
    </div>
  )
}

export default Movie