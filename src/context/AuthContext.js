import { createContext, useContext, useMemo, useState } from 'react'
import FirebaseAuth from '../handlers/auth'

const { signIn, signOut, getCurrenUser } = FirebaseAuth
const Context = createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const login = () => signIn().then(setCurrentUser)
  const logout = () => signOut().then(() => setCurrentUser(null))
  const authenticate = () => getCurrenUser().then(setCurrentUser)

  const value = useMemo(() => {
    return { login, logout, authenticate, currentUser }
  }, [login, logout, authenticate, currentUser])

  return <Context.Provider value={value}>{children}</Context.Provider>
}
export const useAuthContext = () => {
  return useContext(Context)
}
export default AuthProvider
