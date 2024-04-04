import Dropdown from './DropDown'
import Navigation from './Navigation'
import SearchForm from './SearchForm'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Abano-5
        </a>
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
