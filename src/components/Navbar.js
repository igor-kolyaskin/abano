import Dropdown from './DropDown'
import Navigation from './Navigation'
import SearchForm from './SearchForm'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
      <div className='container-fluid'>
        <div className='navbar-brand'>Tbilisi</div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Navigation />
          <SearchForm />
          <Dropdown />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
