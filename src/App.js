import { useContext, useEffect } from 'react'
import './App.css'
import { Context } from './context/FirestoreContext'
import { useAuthContext } from './context/AuthContext'
import List from './components/List'

function App() {
  const { state, read } = useContext(Context)
  const { authenticate } = useAuthContext()

  useEffect(() => {
    read()
    authenticate()
  }, [])

  return (
    <>
      <h1 className='text-start'>Worth to Visit</h1>
      <List items={state.items} />
    </>
  )
}

export default App
