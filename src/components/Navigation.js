function Navigation() {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <a className='nav-link active' aria-current='page' href='#'>
          Home
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          Link
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' aria-disabled='true'>
          Disabled
        </a>
      </li>
    </ul>
  )
}
export default Navigation
