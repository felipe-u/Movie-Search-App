import movies from '../mocks/with-results.json'

export function Movies() {
  return (
    <div className='movies-container'>
      {movies.Search.map((movie) => {
        return (
          <div className='movie-container'>
            <img src={movie.Poster} alt={`${movie.Title} poster from OMDB`} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        )
      })}
    </div>
  )
}
