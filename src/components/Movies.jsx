export function Movies({ movies }) {
  const moviesToRender = movies?.length > 0 ? movies : []
  return (
    <>
      {moviesToRender.length > 0 ? (
        <ListOfMovies movies={movies} />
      ) : (
        <p>No movies found...</p>
      )}
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
