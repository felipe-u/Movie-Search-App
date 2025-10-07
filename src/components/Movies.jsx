import { useMemo, useState } from 'react'

export function Movies({ movies, hasSearched = false }) {
  return (
    <>
      {movies.length > 0 ? (
        <ListOfMovies movies={movies} />
      ) : hasSearched ? (
        <p>No movies found...</p>
      ) : null}
    </>
  )
}

function ListOfMovies({ movies }) {
  const [sort, setSort] = useState(false)

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
      : movies
  }, [sort, movies])

  return (
    <>
      <div className='sort-btn-container'>
        <button onClick={() => setSort(!sort)} className='primary-btn sort-btn'>
          Sort
        </button>
      </div>
      <div className='movies-container'>
        {sortedMovies?.map((movie) => {
          return (
            <div className='movie-container' key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster from OMDB`} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
