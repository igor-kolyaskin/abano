function Dropdown() {
  return (
    <ul className='navbar-nav mb-2 mb-lg-0'>
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Login
        </a>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' href='#'>
              Action
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Another action
            </a>
          </li>
          <li>
            <hr className='dropdown-divider' />
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Something else here
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}
export default Dropdown
