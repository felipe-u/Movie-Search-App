import './App.css'
import { Movies } from './components/Movies'
import { SearchBar } from './components/SearchBar'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Movie Search App</h1>
        <SearchBar />
      </header>
      <main>
        <Movies />
      </main>
    </div>
  )
}

export default App
