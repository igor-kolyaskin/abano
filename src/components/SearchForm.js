import { useState } from 'react'
import { useFireStoreContext } from '../context/FirestoreContext'

function SearchForm() {
  const [text, search] = useState(null)
  const { filterItems: filter } = useFireStoreContext()
  const handleOnChange = e => {
    search(e.target.value)
    filter(e.target.value)
  }
  const handelOnSubmit = e => {
    e.preventDefault()
    filter(text)
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
