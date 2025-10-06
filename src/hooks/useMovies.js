import { useEffect, useState } from 'react'
import { ENPOINT_OMDB } from '../util/consts'
import { getMovies } from '../services/movies'

export function useMovies({ query }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        const movieData = await getMovies(query)
        setMovies(movieData)
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovies()
  }, [query])
  return { movies, error, isLoading }
}
