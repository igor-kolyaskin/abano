import { useContext, useEffect } from 'react'
import './App.css'
import { Context } from './context/FirestoreContext'
import { useAuthContext } from './context/AuthContext'
import List from './components/List'
import filterOnParentId from './handlers/filterOnParentId'

function App() {
  const { state, read } = useContext(Context)
  const { authenticate } = useAuthContext()
  const itemsOnHomePage = filterOnParentId(state.items, null)

  useEffect(() => {
    read()
    authenticate()
  }, [])

  return (
    <>
      <h1 className='text-start'>Worth to Visit</h1>
      <List items={itemsOnHomePage} />
    </>
  )
}

export default App
