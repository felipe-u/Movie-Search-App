import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { SearchBar } from './components/SearchBar'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function App() {
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [isEmptyQuery, setIsEmptyQuery] = useState(true)
  const { movies, error, isLoading, fetchMovies } = useMovies({ query })

  const debouncedSearch = useCallback(
    debounce((query) => {
      fetchMovies(query)
    }, 300),
    []
  )

  const handleSearch = (event) => {
    const value = event.target.value
    setQuery(value)
    setHasSearched(true)
    if (value !== '') {
      setIsEmptyQuery(false)
      debouncedSearch(value)
      return
    }
    setIsEmptyQuery(true)
  }

  return (
    <div className='container'>
      <header>
        <h1>Movie Search App</h1>
        <SearchBar query={query} onSearch={handleSearch} />
      </header>
      <main>
        {isEmptyQuery && <p>You could find a movie right here mate</p>}
        {error && <p>{error}...</p>}
        {isLoading && <div className='loader'></div>}
        {movies && !isLoading && !error && !isEmptyQuery && (
          <Movies movies={movies} hasSearched={hasSearched} />
        )}
      </main>
    </div>
  )
}

export default App
