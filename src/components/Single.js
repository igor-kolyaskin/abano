import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useMemo } from 'react'
import { Context } from '../context/FirestoreContext'
import filterOnParentId from '../handlers/filterOnParentId'
import List from './List'

const Single = () => {
  const { state, read } = useContext(Context)

  useEffect(() => {
    read()
  }, [])

  const navigate = useNavigate()
  const { state: routerState } = useLocation()

  const list = useMemo(() => {
    const parentItem = state.items.find(item => item.id === routerState.id)
    const successorItems = filterOnParentId(state.items, routerState.id)
    return [parentItem, ...successorItems]
  }, [state.items, routerState.id])

  return (
    <>
      <div className='row'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          fill='currentColor'
          className='bi bi-chevron-left'
          viewBox='0 0 16 16'
          style={{
            height: '48px',
            width: '48px',
            paddingTop: '8px',
            paddingLeft: 0,
            cursor: 'pointer',
          }}
          onClick={() => navigate(-1)}
        >
          <path
            fillRule='evenodd'
            d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'
          />
        </svg>
        <div
          className='text-start h2 pt-2'
          style={{ height: '48px', width: '460px' }}
        >
          {list[0]?.title}
        </div>
      </div>
      <List items={list} pageType='single' />
    </>
  )
}
export default Single
