export function SearchBar({ query, onSearch }) {
  return (
    <form>
      <input
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        type='text'
        placeholder='The Matrix, Kil Bill, Avengers...'
      />
    </form>
  )
}
