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
      <div className='row'>
        <i
          className='bi bi-chevron-left pt-3'
          style={{ width: '32px', cursor: 'pointer' }}
          onClick={() => navigate(-1)}
        ></i>
        <div
          className='text-start h1'
          style={{ height: '32px', width: '160px' }}
        >
          Headline
        </div>
      </div>
      <div className='d-flex justify-content-center mb-5'>
        <Card {...item} />
      </div>
    </>
  )
}
export default Single
