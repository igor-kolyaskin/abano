import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function Navigation() {
  const { pathname } = useLocation()
  const { currentUser } = useAuthContext()
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <Link
          className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          aria-current='page'
          to='/'
        >
          Home
        </Link>
      </li>

      {currentUser && (
        <li className='nav-item'>
          <Link
            className={`nav-link ${pathname === '/profile' ? 'active' : ''}`}
            aria-current='page'
            // to='/profile'
            to='/'
          >
            New Page
          </Link>
        </li>
      )}
    </ul>
  )
}
export default Navigation
