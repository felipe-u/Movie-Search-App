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
  return (
    <div className='movies-container'>
      {movies?.map((movie) => {
        return (
          <div className='movie-container' key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster from OMDB`} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        )
      })}
    </div>
  )
}
