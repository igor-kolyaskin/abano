import { useState } from 'react'

function SearchForm() {
  const { text, search } = useState(null)
  const handleOnChange = e => search(e.target.value)
  const handelOnSubmit = e => {
    e.preventDefault()
  }

  return (
    <form className='d-flex' role='search' onSubmit={handelOnSubmit}>
      <input
        onChange={handleOnChange}
        className='form-control me-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
      />
      <button className='btn btn-outline-success' type='submit'>
        Search
      </button>
    </form>
  )
}
export default SearchForm
