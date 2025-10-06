import { useEffect, useState } from 'react'
import { ENPOINT_OMDB } from '../util/consts'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export function useMovies({ query }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (query === '') return
    fetch(`${ENPOINT_OMDB}?apikey=${API_KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search)
          return
        }
        setMovies([])
      })
  }, [query])
  return { movies }
}
