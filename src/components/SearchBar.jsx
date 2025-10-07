export function SearchBar({ query, onSearch }) {
  return (
    <form>
      <input
        value={query}
        onChange={onSearch}
        type='text'
        placeholder='The Matrix, Kil Bill, Avengers...'
      />
    </form>
  )
}
