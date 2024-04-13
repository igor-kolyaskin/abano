import { useAuthContext } from '../context/AuthContext'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

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
  const { currentUser } = useAuthContext()
  const username = useMemo(() => {
    return currentUser?.displayName || 'Profile'
  }, [currentUser])
  const avatar = useMemo(() => {
    return !!currentUser ? (
      <img
        className='avatar'
        src={currentUser?.photoURL}
        alt={currentUser?.displayName}
        width='34'
        height='34'
      />
    ) : (
      'Login'
    )
  }, [currentUser])

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
          {avatar}
        </a>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
          <li className='dropdown-item text-center'>
            {currentUser && <Link to={'/profile'}>{username}</Link>}
            <hr className='dropdown divider' />
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
