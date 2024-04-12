import { useMemo, useContext, useEffect } from 'react'
import './App.css'
import { Context } from './context/FirestoreContext'
import { useAuthContext } from './context/AuthContext'
import List from './components/List'

function App() {
  const { state, read } = useContext(Context)
  const { authenticate } = useAuthContext()

  const count = useMemo(() => {
    return `you have ${state.items.length} image${
      state.items.length > 1 ? 's' : ''
    }`
  }, [state.items])

  useEffect(() => {
    read()
    authenticate()
  }, [])

  return (
    <>
      <h1 className='text-center'>Abano 5</h1>
      {count}
      <List items={state.items} />
    </>
  )
}

export default App
