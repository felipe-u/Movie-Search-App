import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { SearchBar } from './components/SearchBar'
import { useMovies } from './hooks/useMovies'

function App() {
  const [query, setQuery] = useState('')
  const { movies } = useMovies({ query })

  const handleSearch = (value) => {
    setQuery(value)
  }

  return (
    <div className='container'>
      <header>
        <h1>Movie Search App</h1>
        <SearchBar query={query} onSearch={handleSearch} />
      </header>
      <main>{movies && <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
