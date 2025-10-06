import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { SearchBar } from './components/SearchBar'
import { useMovies } from './hooks/useMovies'

function App() {
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [isEmptyQuery, setIsEmptyQuery] = useState(true)
  const { movies, error, isLoading } = useMovies({ query })

  const handleSearch = (value) => {
    setQuery(value)
    setHasSearched(true)
    if (value !== '') {
      setIsEmptyQuery(false)
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
        {isLoading && <div class='loader'></div>}
        {movies && !isLoading && !error && !isEmptyQuery && (
          <Movies movies={movies} hasSearched={hasSearched} />
        )}
      </main>
    </div>
  )
}

export default App
