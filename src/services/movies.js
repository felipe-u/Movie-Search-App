import { ENPOINT_OMDB } from '../util/consts'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const getMovies = async (title) => {
  try {
    const res = await fetch(`${ENPOINT_OMDB}?apikey=${API_KEY}&s=${title}`)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json()
    if (data.Response === 'True') {
      return data.Search
    }
    return []
  } catch (e) {
    throw new Error('Error fetching movies', e.message)
  }
}
