import { useAuthContext } from '../context/AuthContext'

const LogIn = () => {
  const { login, currentUser } = useAuthContext()
  return (
    !currentUser && (
      <button type='button' className='btn btn-warning' onClick={login}>
        Login
      </button>
    )
  )
}

const LogOut = () => {
  const { logout, currentUser } = useAuthContext()
  return (
    !!currentUser && (
      <button type='button' className='btn btn-danger' onClick={logout}>
        Logout
      </button>
    )
  )
}
function Dropdown() {
  return (
    <ul className='navbar-nav mb-2 mb-lg-0'>
      {' '}
      {/* remove ms-auto */}
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='navbarDropdown'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Login
        </a>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
          <li>
            <a className='dropdown-item text-center' href='#'>
              Profile
            </a>
            <li>
              <hr className='dropdown divider' />
            </li>
          </li>
          <div className='d-flex justify-content-center'>
            <LogIn />
            <LogOut />
          </div>
        </ul>
      </li>
    </ul>
  )
}
export default Dropdown
