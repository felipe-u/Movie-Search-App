import { useEffect, useRef } from 'react'

export function SearchBar({ query, onSearch }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form>
      <input
        value={query}
        onChange={onSearch}
        type='text'
        placeholder='The Matrix, Kil Bill, Avengers...'
        ref={inputRef}
      />
    </form>
  )
}
