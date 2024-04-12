import { useLocation, useNavigate } from 'react-router-dom'
import { useFireStoreContext } from '../context/FirestoreContext'
import Card from './Card'

const Single = () => {
  const navigate = useNavigate()
  const { state } = useFireStoreContext()
  const { state: routerState } = useLocation()
  const item = state.items.find(item => item.id === routerState.id)

  return (
    <>
      <button className='btn btn-link' onClick={() => {}}>
        Back
      </button>
      <div className='d-flex justify-content-center mb-5'>
        <Card {...item} />
      </div>
    </>
  )
}
export default Single
