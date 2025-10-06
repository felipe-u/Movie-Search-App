import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { SearchBar } from './components/SearchBar'
import { useMovies } from './hooks/useMovies'

function App() {
  const [query, setQuery] = useState('')
  const { movies } = useMovies({ query })

  const handleSearch = (value) => {
    const newValue = value;
    setQuery(newValue)
  }

  return (
    <div className='container'>
      <header>
        <h1>Movie Search App</h1>
        <SearchBar query={query} onSearch={handleSearch} />
      </header>
      <main>{movies.length > 0 && <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
