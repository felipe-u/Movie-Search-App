import { useCallback, useRef, useState } from 'react'
import { getMovies } from '../services/movies'

export function useMovies({ query }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const previousQuery = useRef(query)

  const fetchMovies = useCallback(async (query) => {
    if (query === previousQuery.current) return
    if (query === '') return
    try {
      setIsLoading(true)
      setError(null)
      previousQuery.current = query
      const movieData = await getMovies(query)
      setMovies(movieData)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { movies, error, isLoading, fetchMovies }
}
